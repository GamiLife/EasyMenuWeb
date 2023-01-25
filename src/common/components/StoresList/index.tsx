import classNames from 'classnames';

import { ILocation, Location } from '../Location';
import * as S from './styles';

interface IStoresList {
  locations: ILocation[];
  isLoading: boolean;
}

export const StoresList = ({ locations, isLoading }: IStoresList) => {
  return (
    <S.StoresList className={classNames('stores-list')}>
      {!isLoading &&
        locations.map(({ address, id, name, phone }: ILocation) => (
          <Location key={id} address={address} name={name} phone={phone} />
        ))}
    </S.StoresList>
  );
};
