import Breadcrumbs from '@mui/material/Breadcrumbs';
import { RichText } from '@gamiui/standard';

import Link from 'next/link';
import * as React from 'react';

interface ICrumb {
  text: string;
  href: string;
  last?: boolean;
}

export default function NextBreadcrumbs() {
  const generateBreadcrumbs = () => {
    return [];
  };
  return <Breadcrumbs aria-label="breadcrumb" />;
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
