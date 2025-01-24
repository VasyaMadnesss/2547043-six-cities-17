import { Offers } from '../../mocks/offers';
import { separateFavoriteOffersByCity } from '../../utils';
import { AppRoute } from '../../const';
import PlaceCards from '../place-cards/place-cards';

type FavoritesListingProps = {
  offers: Offers;
}

function FavoritesListing({ offers }: FavoritesListingProps): JSX.Element {
  const separatedOffers = separateFavoriteOffersByCity(offers);
  return (
    <ul className="favorites__list">
      {Object.keys(separatedOffers).map((cityName) => (
        <li key={cityName} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{cityName}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            <PlaceCards offers={separatedOffers[cityName]} pageLocation={AppRoute.Favorites} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesListing;
