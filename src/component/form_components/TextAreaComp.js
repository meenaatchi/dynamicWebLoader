import React from 'react';
import {motion} from 'framer-motion';


export default function TextAreaComp({attr, toggle}) {  

    let comp = <div><textarea>asdf</textarea></div>
    console.log(comp)

    return (  
       <motion.div drag = {toggle} dragMomentum = {false} className = 'text-area container' key = {Math.random().toString()}>
            <label className = 'label'>Address: </label>
            <div className = 'rhs'>
            <textarea className = 'txa'  placeholder = 'Type your address here...' key={Math.random().toString()} rows = {attr['Row']} cols = {attr['Column']}></textarea> 
            </div>
        </motion.div> 
    )
}