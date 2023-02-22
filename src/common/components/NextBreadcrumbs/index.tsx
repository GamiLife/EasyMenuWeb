import { useRouter } from 'next/router';
import Link from 'next/link';
import { RichText } from '@gamiui/standard';

import * as React from 'react';
import * as S from './styles';

interface ICrumb {
  text: string;
  href: string;
  last?: boolean;
}

export default function NextBreadcrumbs() {
  const router = useRouter();
  const { slugCompany } = router.query;
  // router.asPath -> '/sea-fast-food'
  const breadcrumbs = React.useMemo(
    function generateBreadcrumbs() {
      const asPathWithoutQuery = router.asPath.split('?')[0]; // '/sea-fast-food'
      const asPathNestedRoutes = asPathWithoutQuery
        .split('/') // ['', 'sea-fast-food']
        .filter((v) => v.length > 0); // ['sea-fast-food']

      const crumblist = asPathNestedRoutes.map((subpath) => {
        // const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/'); // '/sea-fast-food'
        const href = `/${slugCompany}`;
        const text = subpath; // 'sea-fast-food'
        return { href, text };
      });

      return [{ href: `/${slugCompany}`, text: 'Home' }, ...crumblist]; // [{ href: '/', text: 'Home' }, {href, text}]
    },
    [router.asPath, slugCompany]
  );

  // const breadcrumbs = generateBreadcrumbs();

  return (
    <S.NextBreadcrumbs aria-label="breadcrumb">
      {breadcrumbs.map((crumb, idx) => (
        <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
      ))}
    </S.NextBreadcrumbs>
  );
}
// Each individual "crumb" in the breadcrumbs list
function Crumb({ text, href, last = false }: ICrumb) {
  // The last crumb is rendered as normal text since we are already on the page
  if (last) {
    // return <S.LastCrumb text={text} />;
    return <S.LastCrumb>{text}</S.LastCrumb>;
  }

  // All other crumbs will be rendered as links that can be visited
  return (
    <>
      <S.BreadcrumbLink href={href}>{text}</S.BreadcrumbLink>
      <S.BreadcrumbDivisor>{'>'}</S.BreadcrumbDivisor>
    </>
  );
}
