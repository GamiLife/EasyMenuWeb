const COMPANY_THEME_URL = 'easymenu/api/v1/companies';
const dbName = 'myDatabase';
const dbVersion = 1;
const storeName = 'cachedResponses';

function processIndexDBCaching(key, event, matchUrl) {
  return new Promise((resolve, reject) => {
    var openRequest = indexedDB.open(dbName, dbVersion);

    openRequest.onupgradeneeded = function (e) {
      let db = e.target.result;
      db.createObjectStore(storeName, { keyPath: 'url' });
    };

    openRequest.onsuccess = function (e) {
      let db = e.target.result;

      var transaction = db.transaction([storeName], 'readwrite');
      var store = transaction.objectStore(storeName);

      var request = store.get(key);

      request.onerror = function () {
        console.log('Error');
        reject('unexpected error happened');
      };
      request.onsuccess = function (e) {
        const result = e.target.result;

        if (!result) {
          console.log('Test SW', 'Not Found from cache');
          resolve(
            fetch(event.request.clone()).then((response) => {
              response.json().then((responseJson) => {
                const transactionPut = db.transaction([storeName], 'readwrite');
                const storeForSetting = transactionPut.objectStore(storeName);
                storeForSetting.put({
                  url: key,
                  data: responseJson,
                  timestamp: Date.now(),
                });
              });
              return response;
            })
          );
          return;
        }

        console.log('Test SW', 'Found from cache', result.data);
        try {
          const jsonData = JSON.stringify(result.data);
          resolve(new Response(jsonData));
        } catch (e) {
          console.error('Error parsing cached JSON:', e);
          resolve(fetch(event.request.clone()));
        }
      };
    };

    openRequest.onerror = function (e) {
      console.log('Error');
    };
  });
}

function execute(url, event, matchUrl) {
  return processIndexDBCaching(url, event, matchUrl).then(
    (response) => {
      return response;
    },
    (reason) => {
      console.log('Test SW Error: ', reason);
      return null;
    }
  );
}

self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  const matchUrl = url.includes(COMPANY_THEME_URL);

  if (!matchUrl) {
    return;
  }

  console.log('Test SW', 'Catch fetch');
  event.respondWith(execute(url, event, matchUrl));
});
