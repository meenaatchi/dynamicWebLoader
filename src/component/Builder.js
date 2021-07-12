import React, {  useState } from 'react';
import './css/builder.css'
import {motion} from 'framer-motion'; //for drag the UI component in the form.
import TextAreaComp from './form_components/TextAreaComp';
import TextPswdComp from './form_components/TextPswdComp';
import DropDownComp from './form_components/DropDownComp';
import CheckRadioComp from './form_components/CheckRadioComp'; 

export default function Builder({d}) { 
     
    let allData = JSON.parse(d); //passing input json and storing it in allData Variable.
    let formType = allData["ActionDisplayName"]; //storing form type for different json file.
    let attributes = allData["Attributes"]; //attributes variable contains all the UI element details.
    const [toggle, setToggle] = useState(false); //Customize UI by toggling.
     


    return (
        
        <div className = 'containers'> 
            <div className = {toggle ? 'active toggle' : 'toggle'} onClick = {() => {
                if(!toggle) alert('Click Customize to drag the components')
                setToggle(!toggle); 

            }
            }>customize</div>
         
            <div className = 'form'>
            { //All Js code should written inside curly brackets in JSX
            attributes.map((attr) => {    //Mapping all the attributes in json.

//Finding all the attributes according to their types.

                if (attr["Type"].includes("textarea")) {  
                    return ( 
                        <TextAreaComp attr = {attr} toggle = {toggle} key={Math.random().toString()}/>
                    ) 
                }


                if (attr["Type"].includes("text") || attr['Type'].includes('time') || attr['Type'].includes('date') || attr["Type"].includes("pass") || attr['Type'].includes('search') || attr['Type'].includes('number')) {
                    return (
                        <TextPswdComp attr = {attr}  toggle = {toggle}key={Math.random().toString()} />
                    );
                }

                if (attr["Type"].includes("drop")) { 
                    return (
                        <DropDownComp attr = {attr} toggle = {toggle} key={Math.random().toString()}/>
                    );
                }

                if (attr["Type"].includes("check") || attr["Type"].includes("radio")) {  
                    return (
                        <CheckRadioComp attr = {attr} toggle = {toggle} key={Math.random().toString()}/>
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

