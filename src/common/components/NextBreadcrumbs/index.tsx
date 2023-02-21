import { useRouter } from 'next/router';
import Link from 'next/link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { RichText } from '@gamiui/standard';

import * as React from 'react';

interface ICrumb {
  text: string;
  href: string;
  last?: boolean;
}

export default function NextBreadcrumbs() {
  const router = useRouter();

  const generateBreadcrumbs = () => {
    const asPathWithoutQuery = router.asPath.split('?')[0]; // '/sea-fast-food'
    const asPathNestedRoutes = asPathWithoutQuery
      .split('/')
      .filter((v) => v.length > 0); // ['sea-fast-food']

    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');
      const title = subpath;
      return { href, title };
    });

    return [{ href: '/', text: 'Home' }, ...crumblist];
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs.map((crumb, idx) => (
        <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
      ))}
    </Breadcrumbs>
  );
}
// Each individual "crumb" in the breadcrumbs list
function Crumb({ text, href, last = false }: ICrumb) {
  // The last crumb is rendered as normal text since we are already on the page
  if (last) {
    return <RichText text={text} />;
  }

  // All other crumbs will be rendered as links that can be visited
  return <Link href={href}>{text}</Link>;
}
