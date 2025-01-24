import { Link } from 'react-router-dom';
import { AppRoute } from '../const';
import { Offers } from '../mocks/offers';
import Header from '../components/header/header';
import FavoritesListing from '../components/favorites-listing/favorites-listing';

type FavoritesPageProps = {
  offers: Offers;
}

function FavoritesPage({ offers }: FavoritesPageProps): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesListing offers={offers} />
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
