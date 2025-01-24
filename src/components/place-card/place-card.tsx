import { AppRoute } from '../../const';
import { Offer } from '../../mocks/offers';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter, getRelativeRating } from '../../utils';

type PlaceCardProps = {
  offer: Offer;
  updateActiveCard: () => void;
  pageLocation: AppRoute;
}

function PlaceCard({ offer, updateActiveCard, pageLocation }: PlaceCardProps): JSX.Element {
  let imageWidth;
  let imageHeight;

  switch (pageLocation) {
    case AppRoute.Root:
      imageHeight = 200;
      imageWidth = 260;
      break;
    case AppRoute.Favorites:
      imageHeight = 110;
      imageWidth = 150;
      break;
  }

  return (
    <article className={`${pageLocation === AppRoute.Root && 'cities' || pageLocation === AppRoute.Favorites && 'favorites'}__card place-card`} onMouseEnter={() => {
      if(pageLocation === AppRoute.Root) {
        updateActiveCard();
      }
    }}
    >
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${pageLocation === AppRoute.Root && 'cities' || pageLocation === AppRoute.Favorites && 'favorites'}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={imageWidth}
            height={imageHeight}
            alt="Place image"
          />
        </a>
      </div>
      <div className={`${pageLocation === AppRoute.Root && 'place-card__info' || pageLocation === AppRoute.Favorites && 'favorites__card-info place-card__info'}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">s
            <span style={{ width: getRelativeRating(offer.rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(offer.type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
