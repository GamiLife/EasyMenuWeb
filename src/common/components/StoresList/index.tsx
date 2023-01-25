import { ILocation, Location } from '../Location';
import * as S from './styles';

interface IStoresList {
  locations: ILocation[];
}

export const StoresList = ({ locations }: IStoresList) => {
  return (
    <S.StoresList>
      {locations.map(({ address, id, name, phone }: ILocation) => (
        <Location key={id} address={address} name={name} phone={phone} />
      ))}
    </S.StoresList>
  );
};
