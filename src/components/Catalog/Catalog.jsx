import { useState, useEffect } from "react";
import css from "./Catalog.module.css";
import sprite from "../../sprite/sprite.svg"
import { IoStarSharp } from "react-icons/io5";

function Catalog({ filteredCatalogs, isOpen }) {
    const [visible, setVisible] = useState(4);
    const [favoriteItems, setFavoriteItems] = useState([]);

    useEffect(() => {
        const savedItems = JSON.parse(window.localStorage.getItem('saved')) || [];
        setFavoriteItems(savedItems);
    }, []);

    const loadMore = () => {
        setVisible((prevCount) => prevCount + 4);
    };

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

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

    const visibleCatalogs = filteredCatalogs.slice(0, visible);

    return (
        <>
            {visibleCatalogs.map(item => {
                const isItemFavorite = isFavorite(item._id);
                return (
                    <li className={css.item} key={item._id}>
                        <div className={css.container}>
                            <img className={css.img} src={item.gallery[0]} alt="" />
                            <div className={css.blockInfo}>
                                <div>
                                    <div className={css.blockInfoPrice}>
                                        <h2 className={css.title}>{item.name}</h2>
                                        <h3 className={css.price}>€{item.price}</h3>
                                        <button className={css.buttonFavorite} onClick={() => handleFavorites({ ...item })}>
                                            {isItemFavorite ? <svg width="25" height="24">
                                                <use fill="white" stroke="black" href={`${sprite}#icon-Property-1Default`}></use>
                                            </svg> : <svg width="25" height="24">
                                                <use href={`${sprite}#icon-Property-1pressed`}></use>
                                            </svg>}
                                        </button>
                                    </div>
                                    <div className={css.RataAndLocal}>
                                        <h3 className={css.rate}><span className={css.rateSpan}><IoStarSharp fill="yellow" stroke="yellow" size='16px' /></span>{item.rating} ({item.reviews.length} Reviews)</h3>
                                        <h3 className={css.location}>{item.location}</h3>
                                    </div>
                                </div>
                                <p>{truncateText(item.description, 65)}</p>
                                <div className={css.benefits}>
                                    <div className={css.service}>
                                        <p className={css.text}><span className={css.span}>
                                        <svg width="20" height="20">
                                            <use href={`${sprite}#icon-Users`}></use>
                                        </svg>
                                        </span>{item.adults} adults</p>
                                    </div>
                                    <div className={css.service}>
                                        <p className={css.text}> <span className={css.span}>
                                        <svg width="20" height="20">
                                            <use stroke='black' href={`${sprite}#icon-Container`}></use>
                                        </svg>
                                        </span>{item.transmission}</p>
                                    </div>
                                    <div className={css.service}>
                                        <p className={css.text}><span className={css.span}>
                                        <svg width="20" height="20">
                                            <use href={`${sprite}#icon-Vertical-container`}></use>
                                        </svg>
                                        </span>{item.engine}</p>
                                    </div>
                                    <div className={css.service}>
                                        <p className={css.text}><span className={css.span}>
                                        <svg width="20" height="20">
                                            <use stroke="black" href={`${sprite}#icon-Horizontal-container`}></use>
                                        </svg>
                                        </span>{item.details.kitchen > 0 ? "kitchen" : ''}</p>
                                    </div>
                                    <div className={css.service}>
                                        <p className={css.text}><span className={css.span}>
                                        <svg width="20" height="20">
                                            <use fill="white" stroke="black" href={`${sprite}#icon-Container-1`}></use>
                                        </svg>
                                        </span>{item.details.beds} bed</p>
                                    </div>
                                    <div className={css.service}>
                                        <p className={css.text}><span className={css.span}>
                                        <svg width="20" height="20">
                                            <use fill="white" stroke="black" href={`${sprite}#icon-streamline_hotel-air-conditioner`}></use>
                                        </svg>
                                        </span>{item.details.airConditioner > 0 ? "airConditioner" : ''}</p>
                                    </div>
                                </div>
                                <button onClick={() => isOpen(item)} type="button" className={css.btn}>Show more</button>
                            </div>
                        </div>
                    </li>
                )
            })}
            {visibleCatalogs.length < filteredCatalogs.length && (
                <button className={css.btnLoadmore} onClick={loadMore} type="button">Load more</button>
            )}
        </>
    )
}

export default Catalog;
