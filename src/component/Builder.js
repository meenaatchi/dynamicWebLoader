import React, { useState } from 'react';
import './css/builder.css'
import {motion} from 'framer-motion';
import TextAreaComp from './form_components/TextAreaComp';
import TextPswdComp from './form_components/TextPswdComp';
import DropDownComp from './form_components/DropDownComp';
import CheckRadioComp from './form_components/CheckRadioComp';
 
export default function Builder({d}) { 
    let datas = JSON.parse(d); 
    let formType = datas["ActionDisplayName"];
    let attributes = datas["Attributes"]; 
    const [toggle, setToggle] = useState(false);
     

    return (
        <div className = 'containers'>
            <div className = {toggle ? 'active toggle' : 'toggle'} onClick = {() => setToggle(!toggle)}>customize</div>
            <div className = 'form'>
            {
            attributes.map((attr) => {

                if (attr["Type"].includes("textarea")) { 
                    return ( 
                        <TextAreaComp attr = {attr} toggle = {toggle}/>
                    ) 
                }


                if (attr["Type"].includes("text") || attr["Type"].includes("pass") || attr['Type'].includes('search')) {
                    return (
                        <TextPswdComp attr = {attr} />
                    );
                }

                if (attr["Type"].includes("drop")) {
                    return (
                        <DropDownComp attr = {attr} />
                    );
                }

                if (attr["Type"].includes("check") || attr["Type"].includes("radio")) {  
                    return (
                        <CheckRadioComp attr = {attr} />
                    );
                }

                return null;
            }
            )}
            <motion.div drag = {true} dragMomentum = {false} className = 'button'> {formType} </motion.div> 
            </div>
        </div>
    )
}

{/* <div key={Math.random().toString()} >
                        <label htmlFor = {radio.Value}>{radio.DisplayValue}</label>
                        <input type = {attr['Type']} value = {radio.Value} id = {radio.Value}/>
                       </div> */}