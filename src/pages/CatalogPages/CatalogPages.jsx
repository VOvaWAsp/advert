import CatalogList from "../../components/CatalogList/CatalogList";
import css from "./CatalogPages.module.css"

function CatalogPages() {
    return <div className={css.container}>
        <h2>Hello</h2>
        <CatalogList />
    </div>
}

export default CatalogPages;