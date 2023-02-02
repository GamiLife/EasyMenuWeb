import { NextApiResponse } from 'next';

//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'http://localhost:3000/';

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>http://localhost:3000/</loc>
     </url>
     <url>
       <loc>http://localhost:3000/[categoryDynamic]/product</loc>
     </url>
     <url>
       <loc>http://localhost:3000/404</loc>
     </url>
     <url>
       <loc>http://localhost:3000/locations</loc>
     </url>
     <url>
       <loc>http://localhost:3000/nosotros</loc>
     </url>
     <url>
       <loc>http://localhost:3000/politica-de-privacidad</loc>
     </url>
     <url>
       <loc>http://localhost:3000/terminos-y-condiciones</loc>
     </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  // We make an API call to gather the URLs for our site

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
