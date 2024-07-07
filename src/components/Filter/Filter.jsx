import React, { useState } from 'react';
import css from './Filter.module.css'; 
import sprite from "../../sprite/sprite.svg";

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
        onFilterCheckBoxChanges(newFilters);
    };

    const handleRadioChange = (event) => {
        const { value } = event.target;
        setVehicleType(value);
        onFilterRadioChanges(value); 
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
                    placeholder="City"
                />
                <span className=''><svg width="24" height="25">
                    <use href={`${sprite}#icon-map-pin`}></use>
                </svg></span>
            </div>
            <form className={css.filterForm} onSubmit={handleSubmit}>
                <div className={css.filters}>
                    <p className={css.text}>Filters</p>
                    <div className={css.blockFilter}>
                        <div>
                            <h2 className={css.title}>Vehicle equipment</h2>
                            <hr />
                            <div className={css.equipment}>
                                <label className={`${css.checkboxLabel} ${filters.airConditioner ? css.checkboxInputs : ''}`}>
                                <span>
                                <svg width="24" height="25">
                                    <use href={`${sprite}#icon-Vector`}></use>
                                </svg>
                            </span>
                                    <p>AC</p>
                                    <input
                                        className={css.checkboxInput}
                                        onChange={handleCheckBoxChange}
                                        name="airConditioner"
                                        type="checkbox"
                                        checked={filters.airConditioner}
                                    />
                                </label>
                                <label className={`${css.checkboxLabel} ${filters.automatic ? css.checkboxInputs : ''}`}>
                                    <span>
                                <svg width="24" height="25">
                                    <use href={`${sprite}#icon-Container`}></use>
                                </svg>
                            </span>
                                    <p>Automatic</p>
                                    <input
                                        className={css.checkboxInput}
                                        onChange={handleCheckBoxChange}
                                        name="automatic"
                                        type="checkbox"
                                        checked={filters.automatic}
                                    />
                                </label>
                                <label className={`${css.checkboxLabel} ${filters.kitchen ? css.checkboxInputs : ''}`}>
                                <span>
                                <svg width="24" height="25">
                                    <use href={`${sprite}#icon-Horizontal-container`}></use>
                                </svg>
                            </span>
                                    <p>Kitchen</p>
                                    <input
                                        className={css.checkboxInput}
                                        onChange={handleCheckBoxChange}
                                        name="kitchen"
                                        type="checkbox"
                                        checked={filters.kitchen}
                                    />
                                </label>
                                <label className={`${css.checkboxLabel} ${filters.TV ? css.checkboxInputs : ''}`}>
                                <span>
                                <svg width="24" height="25">
                                    <use href={`${sprite}#icon-Vertical-container-1`}></use>
                                </svg>
                            </span>
                                    <p>TV</p>
                                    <input
                                        className={css.checkboxInput}
                                        onChange={handleCheckBoxChange}
                                        name="TV"
                                        type="checkbox"
                                        checked={filters.TV}
                                    />
                                </label>
                                <label className={`${css.checkboxLabel} ${filters.shower ? css.checkboxInputs : ''}`}>
                                <span>
                                <svg width="24" height="25">
                                    <use href={`${sprite}#icon-Rating`}></use>
                                </svg>
                            </span>
                                    <p>Shower/WC</p>
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
                            <label className={`${css.radioLabel} ${vehicleType === 'panelTruck' ? css.checkboxInputs : ''}`}>
                            <span>
                                <svg width="40" height="29">
                                    <use href={`${sprite}#icon-Button-2`}></use>
                                </svg>
                            </span>
                                Van
                                <input
                                    className={css.radioInput}
                                    onChange={handleRadioChange}
                                    value='panelTruck'
                                    name="vehicleType"
                                    type="radio"
                                    checked={vehicleType === 'panelTruck'}
                                />
                            </label>
                            <label className={`${css.radioLabel} ${vehicleType === 'fullyIntegrated' ? css.checkboxInputs : ''}`}>
                            <span>
                                <svg width="40" height="29">
                                    <use href={`${sprite}#icon-Button-1`}></use>
                                </svg>
                            </span>
                               <p> Fully 
                                Integrated</p>
                                <input
                                    className={css.radioInput}
                                    onChange={handleRadioChange}
                                    value='fullyIntegrated'
                                    name="vehicleType"
                                    type="radio"
                                    checked={vehicleType === 'fullyIntegrated'}
                                />
                            </label>
                            <label className={`${css.radioLabel} ${vehicleType === 'alcove' ? css.checkboxInputs : ''}`}>
                            <span>
                                <svg width="40" height="29">
                                    <use href={`${sprite}#icon-camper`}></use>
                                </svg>
                            </span>
                                Alcove
                                <input
                                    className={css.radioInput}
                                    onChange={handleRadioChange}
                                    value='alcove'
                                    name="vehicleType"
                                    type="radio"
                                    checked={vehicleType === 'alcove'}
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
