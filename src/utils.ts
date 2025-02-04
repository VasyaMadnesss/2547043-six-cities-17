import { Offers } from './mocks/offers';

export type FavoriteOffersByCity = {
  [city: string]: Offers;
};

export function getRelativeRating(rating: number): string {
  const relativeRating = `${rating * 20}%`;
  return relativeRating;
}

export function capitalizeFirstLetter(word: string): string {
  const capitalizedWord = word[0].toUpperCase() + word.slice(1);
  return capitalizedWord;
}

export function separateFavoriteOffersByCity(offers: Offers): FavoriteOffersByCity | null {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  if (favoriteOffers.length > 0) {
    const separatedOffers: FavoriteOffersByCity = {};
    favoriteOffers.forEach((offer) => {
      const cityName = offer.city.name;
      if (!separatedOffers[cityName]) {
        separatedOffers[cityName] = [offer];
      } else {
        separatedOffers[cityName].push(offer);
      }
    });
    return separatedOffers;
  }
  return null;
}
