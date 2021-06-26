import React from 'react';
import {motion} from 'framer-motion'

export default function DropDownComp({attr}) {
    return (
        <motion.div drag={true} dragMomentum={false} key={Math.random().toString()} className = 'drop-down container'>
            <label className = 'label'>Select: </label>
            <div className = 'rhs'>
            <select id="dropdownbox" name="asd"> 
                {
                    attr['DropDownValues'].map(dd => (
                        <option value = {dd.Value} key={Math.random().toString()} >{dd.DisplayValue}</option>
                    ))
                }
            </select>
            </div>
        </motion.div>
    )
}