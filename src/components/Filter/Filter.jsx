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
    const [tempFilters, setTempFilters] = useState({
        airConditioner: false,
        automatic: false,
        kitchen: false,
        TV: false,
        shower: false
    });
    const [tempVehicleType, setTempVehicleType] = useState('');

    const filterLocation = (event) => {
        onFilterLocationChanges(event.target.value);
    };

    const handleCheckBoxChange = (event) => {
        const { name, checked } = event.target;
        setTempFilters({ ...tempFilters, [name]: checked });
    };

    const handleRadioChange = (event) => {
        const { value } = event.target;
        setTempVehicleType(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFilters(tempFilters);
        setVehicleType(tempVehicleType);
        onFilterCheckBoxChanges(tempFilters);
        onFilterRadioChanges(tempVehicleType);
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
                <span className={css.inputIcon}><svg width="24" height="25">
                    <use stroke='black' fill='white' href={`${sprite}#icon-map-pin`}></use>
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
                                <label className={`${css.checkboxLabel} ${tempFilters.airConditioner ? css.checkboxInputs : ''}`}>
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
                                        checked={tempFilters.airConditioner}
                                    />
                                </label>
                                <label className={`${css.checkboxLabel} ${tempFilters.automatic ? css.checkboxInputs : ''}`}>
                                    <span>
                                <svg width="24" height="25">
                                    <use stroke='black' href={`${sprite}#icon-Container`}></use>
                                </svg>
                            </span>
                                    <p>Automatic</p>
                                    <input
                                        className={css.checkboxInput}
                                        onChange={handleCheckBoxChange}
                                        name="automatic"
                                        type="checkbox"
                                        checked={tempFilters.automatic}
                                    />
                                </label>
                                <label className={`${css.checkboxLabel} ${tempFilters.kitchen ? css.checkboxInputs : ''}`}>
                                <span>
                                <svg width="24" height="25">
                                    <use stroke='black' href={`${sprite}#icon-Horizontal-container`}></use>
                                </svg>
                            </span>
                                    <p>Kitchen</p>
                                    <input
                                        className={css.checkboxInput}
                                        onChange={handleCheckBoxChange}
                                        name="kitchen"
                                        type="checkbox"
                                        checked={tempFilters.kitchen}
                                    />
                                </label>
                                <label className={`${css.checkboxLabel} ${tempFilters.TV ? css.checkboxInputs : ''}`}>
                                <span>
                                <svg width="24" height="25">
                                    <use stroke='black' fill='white' href={`${sprite}#icon-Vertical-container-1`}></use>
                                </svg>
                            </span>
                                    <p>TV</p>
                                    <input
                                        className={css.checkboxInput}
                                        onChange={handleCheckBoxChange}
                                        name="TV"
                                        type="checkbox"
                                        checked={tempFilters.TV}
                                    />
                                </label>
                                <label className={`${css.checkboxLabel} ${tempFilters.shower ? css.checkboxInputs : ''}`}>
                                <span>
                                <svg width="24" height="25">
                                    <use stroke='black' href={`${sprite}#icon-Rating`}></use>
                                </svg>
                            </span>
                                    <p>Shower/WC</p>
                                    <input
                                        className={css.checkboxInput}
                                        onChange={handleCheckBoxChange}
                                        name="shower"
                                        type="checkbox"
                                        checked={tempFilters.shower}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className={css.title}>Vehicle type</h2>
                        <div className={css.blockRadio}>
                            <label className={`${css.radioLabel} ${tempVehicleType === 'panelTruck' ? css.checkboxInputs : ''}`}>
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
                                    checked={tempVehicleType === 'panelTruck'}
                                />
                            </label>
                            <label className={`${css.radioLabel} ${tempVehicleType === 'fullyIntegrated' ? css.checkboxInputs : ''}`}>
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
                                    checked={tempVehicleType === 'fullyIntegrated'}
                                />
                            </label>
                            <label className={`${css.radioLabel} ${tempVehicleType === 'alcove' ? css.checkboxInputs : ''}`}>
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
                                    checked={tempVehicleType === 'alcove'}
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
