import { Offers } from './mocks/offers';

type SeparatedFavoriteOffers = {
  [city: string]: Offers;
};

export function getRelativeRating (rating: number): string {
  const relativeRating = `${rating * 20}%`;
  return relativeRating;
}

export function capitalizeFirstLetter (word: string): string {
  const newWord = word[0].toUpperCase() + word.slice(1);
  return newWord;
}

export function separateFavoriteOffersByCity (offers: Offers) {
  const separatedOffers: SeparatedFavoriteOffers = {};
  const favoriteOffers = offers.filter((offer)=> offer.isFavorite);
  favoriteOffers.forEach((offer) => {
    const cityName = offer.city.name;
    if(!separatedOffers[cityName]) {
      separatedOffers[cityName] = [offer];
    } else {
      separatedOffers[cityName].push(offer);
    }
  });
  return separatedOffers;
}
