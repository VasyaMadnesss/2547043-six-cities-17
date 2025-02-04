import { AppRoute } from '../../const';
import PlaceOffers from '../place-offers/place-offers';
import { FavoriteOffersByCity } from '../../utils';

type FavoriteOffersListProps = {
  favoriteOffersByCity: FavoriteOffersByCity;
}

function FavoriteOffersList({ favoriteOffersByCity }: FavoriteOffersListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      {Object.keys(favoriteOffersByCity).map((cityName) => (
        <li key={cityName} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{cityName}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            <PlaceOffers offers={favoriteOffersByCity[cityName]} pageLocation={AppRoute.Favorites} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoriteOffersList;
