import { Link } from 'react-router-dom';
import { AppRoute } from '../const';
import { FavoriteOffersByCity, separateFavoriteOffersByCity } from '../utils';
import { Offers } from '../mocks/offers';
import Header from '../components/header/header';
import FavoriteOffersList from '../components/favorite-offers-list/favorite-offers-list';

type FavoritesPageProps = {
  offers: Offers;
}

function FavoritesPage({ offers }: FavoritesPageProps): JSX.Element {
  const favoriteOffers: FavoriteOffersByCity | null = separateFavoriteOffersByCity(offers);
  if(favoriteOffers === null) {
    return (<div>WIP</div>); // отображение empty-favorites-page.
  }
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteOffersList favoriteOffersByCity={favoriteOffers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
