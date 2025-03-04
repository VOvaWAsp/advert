import css from "./Favorites.module.css";
import sprite from "../../sprite/sprite.svg"
import { useEffect, useState } from "react";

function Favorites() {
    const [favoriteItems, setFavoriteItems] = useState([]);

    useEffect(() => {
        const savedItems = JSON.parse(window.localStorage.getItem('saved')) || [];
        setFavoriteItems(savedItems);
    }, []);

    const items = JSON.parse(window.localStorage.getItem('saved')) || [];

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    useEffect(() => {
        const savedItems = JSON.parse(window.localStorage.getItem('saved')) || [];
        setFavoriteItems(savedItems);
    }, []);

    const handleFavorites = (item) => {
        const savedItems = JSON.parse(window.localStorage.getItem('saved')) || [];
        const itemIndex = savedItems.findIndex(savedItem => savedItem._id === item._id);

        if (itemIndex !== -1) {
            savedItems.splice(itemIndex, 1);
        } else {
            savedItems.push(item);
        }

        window.localStorage.setItem('saved', JSON.stringify(savedItems));
        setFavoriteItems(savedItems);
    };

    const isFavorite = (itemId) => {
        return favoriteItems.some(favItem => favItem._id === itemId);
    };


    return (
        <div>
        {items.length === 0 ? (
            <h2 className={css.favoritesTitle}>Here are your favorite cars</h2>
        ) : (
            <div>
                <h2 className={css.favoritesTitle}>Your favorite cars</h2>
                <ul className={css.list}>
                    {items.map(item => {
                                         const isItemFavorite = isFavorite(item._id);
                      return ( <li className={css.item} key={item._id}>
                            <div className={css.container}>
                                <img className={css.img} src={item.gallery[0]} alt="" />
                                <div className={css.blockInfo}>
                                    <div>
                                        <div className={css.blockInfoPrice}>
                                            <h2 className={css.title}>{item.name}</h2>
                                            <h3 className={css.price}>€{item.price}</h3>
                                            <button className={css.buttonFavorite} onClick={() => handleFavorites({ ...item })}>
                                            {isItemFavorite ? <svg width="25" height="24">
                                                <use href={`${sprite}#icon-Property-1pressed`}></use>
                                            </svg> : <svg width="25" height="24">
                                                <use fill="white" stroke="black" href={`${sprite}#icon-Property-1Default`}></use>
                                            </svg>}
                                        </button>                                        </div>
                                        <div className={css.RataAndLocal}>
                                            <h3 className={css.rate}>{item.rating} ({item.reviews.length} Reviews)</h3>
                                            <h3 className={css.location}>{item.location}</h3>
                                        </div>
                                    </div>
                                    <p>{truncateText(item.description, 65)}</p>
                                    <div className={css.benefits}>
                                        <div className={css.service}>
                                            <p className={css.text}>{item.adults} adults</p>
                                        </div>
                                        <div className={css.service}>
                                            <p className={css.text}>{item.transmission}</p>
                                        </div>
                                        <div className={css.service}>
                                            <p className={css.text}>{item.engine}</p>
                                        </div>
                                        <div className={css.service}>
                                            <p className={css.text}>{item.details.kitchen > 0 ? "kitchen" : ''}</p>
                                        </div>
                                        <div className={css.service}>
                                            <p className={css.text}>{item.details.beds} bed</p>
                                        </div>
                                        <div className={css.service}>
                                            <p className={css.text}>{item.details.airConditioner > 0 ? "airConditioner" : ''}</p>
                                        </div>
                                    </div>
                                    <button type="button" className={css.btn}>Show more</button>
                                </div>
                            </div>
                        </li>
                    )})}
                </ul>
            </div>
            )}
            </div>
    );
}

export default Favorites;
