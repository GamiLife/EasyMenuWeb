/sea-fast-food: [{ 
  text: "sea-fast-food", 
  link: "http://localhost:3000/sea-fast-food" 
}] 

/* 
sitemap  

verificar si la url /sea-fast-food/sea-foods/product esta mapeada en el proyecto sino  
que te duelva la url del home*/ 

/sea-fast-food/sea-foods/product/ceviche: [ 
{ 
  text: "sea-fast-food", 
  link: "http://localhost:3000/sea-fast-food" 
}, 
{ 
  text: "sea-foods", 
  link: "http://localhost:3000/sea-fast-food" 
}, 
{ 
  text: "products", 
  link: "http://localhost:3000/sea-fast-food" 
}, 
{ 
  text: "ceviche", 
}, 
] 

const router= useRouter() 

const breadcrumb = generateBreadcrumbs(url:string) { 
  guiarse del codigo del blog 
  return [...] 
} 

breadcrumb.map((crumb)=> ( 
  <Crumb/> 
))


export default function NextBreadcrumbs() { 
  // Gives us ability to load the current route details 
  const router = useRouter(); 
 
  function generateBreadcrumbs() { 
    // Remove any query parameters, as those aren't included in breadcrumbs 
    const asPathWithoutQuery = router.asPath.split("?")[0]; 
 
    // Break down the path between "/"s, removing empty entities 
    // Ex:"/my/nested/path" --> ["my", "nested", "path"] 
    const asPathNestedRoutes = asPathWithoutQuery.split("/") 
                                                 .filter(v => v.length > 0); 
 
    // Iterate over the list of nested route parts and build 
    // a "crumb" object for each one. 
    const crumblist = asPathNestedRoutes.map((subpath, idx) => { 
      // We can get the partial nested route for the crumb 
      // by joining together the path parts up to this point. 
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/"); 
      // The title will just be the route string for now 
      const title = subpath; 
      return { href, text };  
    }) 
 
    // Add in a default "Home" crumb for the top-level 
    return [{ href: "/", text: "Home" }, ...crumblist]; 
  } 
 
  // Call the function to generate the breadcrumbs list 
  const breadcrumbs = generateBreadcrumbs(); 
 
  return ( 
    <Breadcrumbs aria-label="breadcrumb" /> 
  ); 
}


// ...rest of NextBreadcrumbs component above... 
return ( 
  {/* The old breadcrumb ending with '/>' was converted into this */} 
  <Breadcrumbs aria-label="breadcrumb"> 
    {/* 
      Iterate through the crumbs, and render each individually. 
      We "mark" the last crumb to not have a link. 
    */} 
    {breadcrumbs.map((crumb, idx) => ( 
      <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} /> 
    ))} 
  </Breadcrumbs> 
);