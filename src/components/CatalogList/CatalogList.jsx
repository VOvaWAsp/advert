import React, { useState } from 'react';
import Catalog from '../Catalog/Catalog';
import Filter from '../Filter/Filter';
import { useSelector } from 'react-redux';
import CatalogModal from '../CatalogModal/CatalogModal';

function CatalogList() {
    const [filterLocation, setFilterLocation] = useState('');
    const [filterCheckBox, setFilterCheckBox] = useState({
        airConditioner: false,
        automatic: false,
        kitchen: false,
        TV: false,
        shower: false
    });
    const [vehicleType, setVehicleType] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);

    const catalogs = useSelector((state) => state.catalog.items);

    const handleFilterLocationChange = (value) => {
        setFilterLocation(value);
    };

    const handleFilterCheckBoxChange = (options) => {
        setFilterCheckBox({
            ...filterCheckBox,
            ...options
        });
    };

    const handleFilterRadioChange = (value) => {
        setVehicleType(value);
    };

    const filteredCatalogs = catalogs.filter((catalog) => {
        const location = catalog.location.toLowerCase().includes(filterLocation.toLowerCase());
        const equipment =
            (!filterCheckBox.airConditioner || catalog.details.airConditioner > 0) &&
            (!filterCheckBox.automatic || catalog.transmission === 'automatic') &&
            (!filterCheckBox.kitchen || catalog.details.kitchen > 0) &&
            (!filterCheckBox.TV || catalog.details.TV > 0) &&
            (!filterCheckBox.shower || catalog.details.shower > 0);
        const type = vehicleType === '' || catalog.form === vehicleType;

        return location && equipment && type;
    });

    const handleOpenModal = (item) => {
        setSelectedItem(item); 
    };

    const handleCloseModal = () => {
        setSelectedItem(null); 
    };

    return (
        <div>
            <Filter
                onFilterCheckBoxChanges={handleFilterCheckBoxChange}
                onFilterLocationChanges={handleFilterLocationChange}
                onFilterRadioChanges={handleFilterRadioChange}
            />
            <ul>
                <Catalog filteredCatalogs={filteredCatalogs} isOpen={handleOpenModal} />
            </ul>
            {selectedItem && (
                <CatalogModal item={selectedItem} closeModal={handleCloseModal} isOpen={selectedItem !== null} />
            )}
        </div>
    );
}

export default CatalogList;
