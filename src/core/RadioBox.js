import React, { useState, Fragment } from "react";

const RadioBox = ({ prices, handleFilters }) => {
    const [value, setValue] = useState(0)

    const handleChange = (e) => {
        handleFilters(e.target.value)
        setValue(e.target.value)
    }

    return prices.map((p, i) => (
        <div key={i} >
            <input name={p} type="radio" onChange={handleChange} value={`${p._id}`}  className="mr-2 mr-4" />
            <label className="form-check-label">{p.name}</label>
        </div>
    ))
};

export default RadioBox;
