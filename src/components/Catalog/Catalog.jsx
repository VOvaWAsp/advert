import { useSelector } from "react-redux";
import css from "./Catalog.module.css"

function Catalog() {
    const catalogs = useSelector(state => state.catalog.items);

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...'
        }
        return text
    }
    return (
    <>
    {catalogs.map(item => {
                return(
                <li className={css.item} key={item._id}>
                <div className={css.container}>
                    <img className={css.img} src={item.gallery[0]} alt="" />
                    <div>
                        <div className={css.blockInfoPrice}>
                    <h2 className={css.title}>{item.name}</h2>
                    <h3 className={css.title}>€{item.price}</h3>
                    <button></button>
                    </div>
                    <div>
                    <h3>{item.rating}</h3>
                    <h3>{item.location}</h3>
                    </div>
                    <p>{truncateText(item.description, 65)}</p>
                    <div>
                        <p>{item.adults}</p>
                    </div>
                    <button>Show more</button>
                    </div>
                </div>
            </li>
            )})}
    </>
    )
}

export default Catalog;