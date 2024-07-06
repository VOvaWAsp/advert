import { useSelector } from "react-redux";
import css from "./Catalog.module.css"

function Catalog({filteredCatalogs}) {
    // const catalogs = useSelector(state => state.catalog.items);

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...'
        }
        return text
    }

    console.log(filteredCatalogs)
    return (
    <>
    {filteredCatalogs.map(item => {
                return(
                <li className={css.item} key={item._id}>
                <div className={css.container}>
                    <img className={css.img} src={item.gallery[0]} alt="" />
                    <div className={css.blockInfo}>
                       <div>
                       <div className={css.blockInfoPrice}>
                    <h2 className={css.title}>{item.name}</h2>
                    <h3 className={css.price}>€{item.price}</h3>
                    <button></button>
                    </div>
                    <div className={css.RataAndLocal}>
                    <h3 className={css.rate}>{item.rating}({item.reviews.length}Reviews)</h3>
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
    </>
    )
}

export default Catalog;