import Image, { ImageLoaderProps } from 'next/image';
import * as S from './styles';

export type ISharedBlock = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: any) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export type IImage = {
  id?: number;
  imageUrl: string;
  alt: string;
  height?: string;
} & ISharedBlock;

export const NextImage = ({
  imageUrl,
  alt,
  height = '300px',
  ...props
}: IImage) => {
  const base = imageUrl.split('/').slice(0, -1).join('/');
  const src = imageUrl.split('/').slice(-1)[0];

  function customLoader({ src, width, quality }: ImageLoaderProps) {
    return `${base}/${src}?w=${width}&q=${quality || 75}`;
  }

  return (
    <S.NextImage $height={height} {...props}>
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
