import React, { useState } from 'react';
import css from './Filter.module.css'; 

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
        const newFilters = { ...filters, [name]: checked };
        setFilters(newFilters);
        onFilterCheckBoxChanges(newFilters); // Call the prop function to pass the updated filters
    };

    const handleRadioChange = (event) => {
        const { value } = event.target;
        setVehicleType(value);
        onFilterRadioChanges(value); // Call the prop function to pass the updated vehicle type
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onFilterCheckBoxChanges(filters);
        onFilterRadioChanges(vehicleType);
    };

    return (
        <div>
            <div className={css.blockLocation}>
                <p className={css.text}>Location</p>
                <input
                    className={css.input}
                    onChange={filterLocation}
                    type="text"
                    name="location"
                />
            </div>
            <form className={css.filterForm} onSubmit={handleSubmit}>
                <div className={css.filters}>
                    <p className={css.text}>Filters</p>
                    <div className={css.blockFilter}>
                        <div>
                            <h2 className={css.title}>Vehicle equipment</h2>
                            <hr />
                            <div className={css.equipment}>
                                <label className={css.checkboxLabel}>
                                    AC
                                    <input
                                        className={css.checkboxInput}
                                        onChange={handleCheckBoxChange}
                                        name="airConditioner"
                                        type="checkbox"
                                        checked={filters.airConditioner}
                                    />
                                </label>
                                <label className={css.checkboxLabel}>
                                    Automatic
                                    <input
                                        className={css.checkboxInput}
                                        onChange={handleCheckBoxChange}
                                        name="automatic"
                                        type="checkbox"
                                        checked={filters.automatic}
                                    />
                                </label>
                                <label className={css.checkboxLabel}>
                                    Kitchen
                                    <input
                                        className={css.checkboxInput}
                                        onChange={handleCheckBoxChange}
                                        name="kitchen"
                                        type="checkbox"
                                        checked={filters.kitchen}
                                    />
                                </label>
                                <label className={css.checkboxLabel}>
                                    TV
                                    <input
                                        className={css.checkboxInput}
                                        onChange={handleCheckBoxChange}
                                        name="TV"
                                        type="checkbox"
                                        checked={filters.TV}
                                    />
                                </label>
                                <label className={css.checkboxLabel}>
                                    Shower/WC
                                    <input
                                        className={css.checkboxInput}
                                        onChange={handleCheckBoxChange}
                                        name="shower"
                                        type="checkbox"
                                        checked={filters.shower}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className={css.title}>Vehicle type</h2>
                        <div className={css.blockRadio}>
                            <label className={css.radioLabel}>
                                Van
                                <input
                                    className={css.radioInput}
                                    onChange={handleRadioChange}
                                    value='panelTruck'
                                    name="vehicleType"
                                    type="radio"
                                />
                            </label>
                            <label className={css.radioLabel}>
                                Fully Integrated
                                <input
                                    className={css.radioInput}
                                    onChange={handleRadioChange}
                                    value='fullyIntegrated'
                                    name="vehicleType"
                                    type="radio"
                                />
                            </label>
                            <label className={css.radioLabel}>
                                Alcove
                                <input
                                    className={css.radioInput}
                                    onChange={handleRadioChange}
                                    value='alcove'
                                    name="vehicleType"
                                    type="radio"
                                />
                            </label>
                        </div>
                    </div>
                    <button type='submit' className={css.btn}>Search</button>
                </div>
            </form>
        </div>
    );
}

export default Filter;
