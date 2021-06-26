import React from 'react'
import {motion} from 'framer-motion';

export default function TextPswdComp({attr}) {
    return (
        <motion.div drag={true} dragMomentum={false} key={Math.random().toString()} className = 'set-of-input container'>
            <label className = 'label'>{attr["Label"]}: </label>
            <div className = 'rhs'>
            <input type={attr.Type} />
            </div>
        </motion.div>
    )
}