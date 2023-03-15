const API = `${process.env.MY_MICROSERVICE_URL}/easymenu/api/v1/`;

export async function get(path: string) {
  const response = await fetch(API + path);
  const result = await response.json();
  return result;
}
