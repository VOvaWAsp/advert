import { useState } from "react";
import Catalog from "../Catalog/Catalog";
import Filter from "../Filter/Filter";
import { useSelector } from "react-redux";

function CatalogList() {
    const [filter, setFilter] = useState('');
    const catalogs = useSelector(state => state.catalog.items);

    const handleFilterChange = (value) => {
        setFilter(value)
    };

    const filteredCatalogs = catalogs.filter(catalog => 
        catalog.location.toLowerCase().includes(filter.toLowerCase())
        )

    return (
    <div>
        <Filter onFilterChanges={handleFilterChange} />
        <ul>
            <Catalog filteredCatalogs={filteredCatalogs} />
        </ul>
    </div>
    );
}

export default CatalogList;