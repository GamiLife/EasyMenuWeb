// import * as React from 'react';
// import { useRouter } from 'next/router';

// import { IThemeProvider, ThemeContext } from './context';
// import { get } from '../../config/api';

// const ThemeProvider = ({ children }: IThemeProvider) => {
//   const router = useRouter();
//   const { slugCompany } = router.query;
//   const [theme, setTheme] = React.useState();

//   // React.useEffect(() => {
//   //   async function companyFetch() {
//   //     const { data } = await get(`companies/slug/${slugCompany}`);
//   //     //   Probar result la línea de arriba
//   //     // console.log(data);
//   //   }
//   //   companyFetch();
//   // }, []);

//   return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
// };

// export default ThemeProvider;

// const [blockIdActive, setBlockIdActive] = React.useState();
