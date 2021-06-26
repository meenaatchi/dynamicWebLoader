import React from 'react';
import {motion} from 'framer-motion'

export default function DropDownComp({attr}) {
    return (
        <motion.div drag={true} dragMomentum={false} key={Math.random().toString()} className = "radio-check-container container">
            <label className = 'label'>{attr['Name']}: </label>
            <div className = 'click-options rhs'>
            { 
                attr['Options'].map(radio => (
                    <div className = 'select-box'  key={Math.random().toString()}>
                        <input class ='radio' type = {attr['Type']} name = 'a' value = {radio.Value} id = {radio.Value} />
                        <label htmlFor = {radio.Value}>{radio.DisplayValue}</label>
                    </div>
                ))
            }
            </div>
        </motion.div>
    )
}