import React from 'react'
import {motion} from 'framer-motion';

export default function TextPswdComp({attr, toggle}) {
    return (
        <motion.div drag={toggle} dragMomentum={false}  className = 'set-of-input container'>
            <label className = 'label'>{attr["Label"]}: </label>
            <div className = 'rhs'>
            <input type={attr.Type} />
            </div>
        </motion.div>
    )
}