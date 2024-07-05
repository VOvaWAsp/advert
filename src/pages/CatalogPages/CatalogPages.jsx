import css from "./CatalogPages.module.css"

function CatalogPages() {
    return <div className={css.container}>
        <h2>Hello</h2>
        <CatalogPages />
    </div>
}

export default CatalogPages;