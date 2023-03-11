import { useContext } from 'react';
import Image, { ImageLoaderProps } from 'next/image';
import { Container } from '@gamiui/standard';

import { HomeContext } from '../../../context';
import { lightTheme } from '../../../../styles/design-system';
import homeBlock from '../../blocks/home-block.json';
import * as S from './styles';

export interface IImage {
  id: number;
  imageUrl: string;
  alt: string;
  height?: string;
  className?: string;
}

export const NextImage = ({
  imageUrl,
  alt,
  className,
  height = '300px',
  id,
}: IImage) => {
  const { idCategory } = useContext(HomeContext);

  const base = imageUrl.split('/').slice(0, -1).join('/');
  const src = imageUrl.split('/').slice(-1)[0];

  function customLoader({ src, width, quality }: ImageLoaderProps) {
    return `${base}/${src}?w=${width}&q=${quality || 75}`;
  }

  return (
    <S.NextImage
      allowBorder={false}
      component={Container}
      blockId={homeBlock.CATEGORY_ITEM}
      $height={height}
      className={className}
      getCustomProps={({ color }) => ({
        color: id === idCategory ? lightTheme.extended.oceanStrong : color,
      })}
    >
      <Image
        loader={customLoader}
        alt={alt}
        src={src}
        fill={true}
        priority={true}
        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
      />
    </S.NextImage>
  );
};
