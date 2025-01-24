import { AppRoute, AuthStatus } from '../../const';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoritesPage from '../../pages/favorites-page';
import LoginPage from '../../pages/login-page';
import MainPage from '../../pages/main-page';
import NotFoundPage from '../../pages/not-found-page';
import PrivateRoute from '../private-route.tsx/private-route';
import OfferPage from '../../pages/offer-page';

import { Offers } from '../../mocks/offers';

type AppProps = {
  offers: Offers;
}

function App({ offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<MainPage offers={offers}/>} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute authStatus={AuthStatus.Auth}>
                <FavoritesPage offers={offers} />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer}>
            <Route index element={<NotFoundPage />} />
            <Route path=':id' element={<OfferPage />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
