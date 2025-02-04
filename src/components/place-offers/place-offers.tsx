import { useState } from 'react';
import { AppRoute } from '../../const';
import { Offers } from '../../mocks/offers';
import PlaceCard from '../place-offer/place-offer';

type PlaceOffersProps = {
  offers: Offers;
  pageLocation: AppRoute;
};

function PlaceOffers({ offers, pageLocation }: PlaceOffersProps): JSX.Element {
  const [, setActiveOffer] = useState(offers[0]);
  return (
    <div className={`${pageLocation === AppRoute.Root && 'cities__places-list places__list tabs__content' || pageLocation === AppRoute.Favorites && 'favorites__places'}`}>
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} pageLocation={pageLocation} updateActiveOffer={() => setActiveOffer(offer)} />)}
    </div>
  );
}

export default PlaceOffers;
