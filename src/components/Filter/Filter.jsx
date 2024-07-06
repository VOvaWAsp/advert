import { useState } from 'react';
import styles from './Filter.module.css'; 

function Filter({ onFilterLocationChanges, onFilterCheckBoxChanges, onFilterRadioChanges }) {
    const [filters, setFilters] = useState({
        airConditioner: false,
        automatic: false,
        kitchen: false,
        TV: false,
        shower: false
    });
    const [vehicleType, setVehicleType] = useState('');

    const filterLocation = (event) => {
        onFilterLocationChanges(event.target.value);
    };

    const handleCheckBoxChange = (event) => {
        const { name, checked } = event.target;
        setFilters({ ...filters, [name]: checked });
    };

    const handleRadioChange = (event) => {
        const { value } = event.target;
        setVehicleType(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const filterVehicleType = vehicleType === '' ? null : vehicleType;

        onFilterCheckBoxChanges(filters);
        onFilterRadioChanges(filterVehicleType);
    };

    return (
        <>
            <input
                className={styles.filterInput}
                onChange={filterLocation}
                type="text"
                name="location"
            />
            <form className={styles.filterForm} onSubmit={handleSubmit}>
                <div className={styles.filters}>
                    <h3 className={styles.filterTitle}>Filters</h3>
                    <div className={styles.filterSection}>
                        <h2>Vehicle equipment</h2>
                        <div className={styles.checkboxGroup}>
                            <label className={styles.checkboxLabel}>
                                Air Conditioner
                                <input
                                    className={styles.checkboxInput}
                                    onChange={handleCheckBoxChange}
                                    name="airConditioner"
                                    type="checkbox"
                                    checked={filters.airConditioner}
                                />
                            </label>
                            <label className={styles.checkboxLabel}>
                                Automatic
                                <input
                                    className={styles.checkboxInput}
                                    onChange={handleCheckBoxChange}
                                    name="automatic"
                                    type="checkbox"
                                    checked={filters.automatic}
                                />
                            </label>
                            <label className={styles.checkboxLabel}>
                                Kitchen
                                <input
                                    className={styles.checkboxInput}
                                    onChange={handleCheckBoxChange}
                                    name="kitchen"
                                    type="checkbox"
                                    checked={filters.kitchen}
                                />
                            </label>
                            <label className={styles.checkboxLabel}>
                                TV
                                <input
                                    className={styles.checkboxInput}
                                    onChange={handleCheckBoxChange}
                                    name="TV"
                                    type="checkbox"
                                    checked={filters.TV}
                                />
                            </label>
                            <label className={styles.checkboxLabel}>
                                Shower/WC
                                <input
                                    className={styles.checkboxInput}
                                    onChange={handleCheckBoxChange}
                                    name="shower"
                                    type="checkbox"
                                    checked={filters.shower}
                                />
                            </label>
                        </div>
                    </div>
                    <div className={styles.filterSection}>
                        <h2>Vehicle type</h2>
                        <div className={styles.radioGroup}>
                            <label className={styles.radioLabel}>
                            Van
                                <input
                                    className={styles.radioInput}
                                    onChange={handleRadioChange}
                                    value='panelTruck'
                                    name="vehicleType"
                                    type="radio"
                                />
                            </label>
                            <label className={styles.radioLabel}>
                            Fully Integrated
                                <input
                                    className={styles.radioInput}
                                    onChange={handleRadioChange}
                                    value='fullyIntegrated'
                                    name="vehicleType"
                                    type="radio"
                                />
                            </label>
                            <label className={styles.radioLabel}>
                            Alcove
                                <input
                                    className={styles.radioInput}
                                    onChange={handleRadioChange}
                                    value='alcove'
                                    name="vehicleType"
                                    type="radio"
                                />
                            </label>
                        </div>
                    </div>
                    <button type='submit' className={styles.filterButton}>Apply Filters</button>
                </div>
            </form>
        </>
    );
}

export default Filter;
