import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Icon } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system';
import homeBlock from '../../blocks/home-block.json';
import { Block } from '../../layouts';
import * as S from './styles';

interface ICrumb {
  text: string;
  href: string;
  last?: boolean;
}

export default function NextBreadcrumbs() {
  const router = useRouter();
  const { slugCompany } = router.query;

  const breadcrumbs = React.useMemo(
    function generateBreadcrumbs() {
      const asPathWithoutQuery = router.asPath.split('?')[0];
      const asPathNestedRoutes = asPathWithoutQuery
        .split('/')
        .filter((v) => v.length > 0);

      const crumblist = asPathNestedRoutes.map((subpath) => {
        const href = `/${slugCompany}`;
        const text = subpath;
        return { href, text };
      });

      return [{ href: `/${slugCompany}`, text: 'Home' }, ...crumblist];
    },
    [router.asPath, slugCompany]
  );

  return (
    <S.NextBreadcrumbs>
      <S.CrumbList aria-label="breadcrumb">
        {breadcrumbs.map((crumb, idx) => (
          <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
        ))}
      </S.CrumbList>
    </S.NextBreadcrumbs>
  );
}

function Crumb({ text, href, last = false }: ICrumb) {
  const deleteHyphen = (text: string) => {
    do {
      text = text.replace('-', ' ');
    } while (text.includes('-'));
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <React.Fragment>
      {last ? (
        <S.LastCrumbItem>
          <Block
            component={S.LastCrumb}
            blockId={homeBlock.WRAPPER_PAGE}
            allowBorder={false}
          >
            {deleteHyphen(text)}
          </Block>
        </S.LastCrumbItem>
      ) : (
        <React.Fragment>
          <S.BreadcrumbLinkElement>
            <S.BreadcrumbLink
              component={Link}
              blockId={homeBlock.WRAPPER_PAGE}
              allowBorder={false}
              href={href}
            >
              {deleteHyphen(text)}
            </S.BreadcrumbLink>
          </S.BreadcrumbLinkElement>
          <S.LastItemListCrumbs>
            <S.BreadcrumbDivisor>
              <Icon name="arrow__right" color={lightTheme.neutral[300]} />
            </S.BreadcrumbDivisor>
          </S.LastItemListCrumbs>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
