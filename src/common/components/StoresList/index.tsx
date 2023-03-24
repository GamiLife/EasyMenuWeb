import classNames from 'classnames';
import { useFetchLocations } from '../../hooks';

import { ILocation, Location } from '../Location';
import { Spinner } from '../Spinner';
import * as S from './styles';

// interface IStoresList {
//   locations: ILocation[];
//   isLoading: boolean;
// }

export const StoresList = () => {
  const { data, isLoading } = useFetchLocations();

  if (isLoading) return <Spinner isLoading={isLoading} />;
  return (
    <S.StoresList className={classNames('stores-list')}>
      {data.map(({ address, id, name, phone }: ILocation) => (
        <Location key={id} address={address} name={name} phone={phone} />
      ))}
    </S.StoresList>
  );
};
