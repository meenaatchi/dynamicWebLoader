import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/form.css'; 
import {useHistory} from 'react-router-dom';

export default function Form(props) {

  const {setDatas, datas} = props;

  const urlbar = useHistory(); 

  const [filename, setFilename] = useState(''); //file Name stored in this variable.
  const [fileContent, setFileContent] = useState('');  //File Content and Text area Value stored in this variable.
  
  

  const handleFileChange = e => {  //onchange event which validate json file and updates the file content.
    
    let file = e.target.files; 
    
    const reader = new FileReader();
    reader.readAsText(file[0]);

    reader.onloadend = () => {
      try {
        JSON.parse(reader.result); 
        setFilename(file[0].name);
        setFileContent(reader.result); 
      } catch (err) {
        alert('Given Json File is incorrect or invalid json format, Please review the file and try again.');
      }
    }
    reader.onerror = () => {
      console.log('file error', reader.error);
    }

  }

  const onClick = ()=> {   // Reloads the page.
    window.location.reload();  
  }

  const handleSubmit = (e) => {   
    if(fileContent === '') {   //Validates the file is NULL or not.
      alert('Please select a file');
      return;
    }
    setDatas(fileContent);  //File content is assigned if it is not NULL
    urlbar.push('/builder') //Calls the builder page which displays dynamic form
  }

  

  return (  //Returns the Form Page
    <div style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
       
      <div className = "col-sm-12">
        <div className="container-page">
          <div className="form-group" id="text_area">

            <div className="row">
              <div className="col-8"><label htmlFor="jsonInputFrom">JSON Input: </label></div>
              <div className="col"><button  onClick = {handleSubmit} className="btn btn-primary" id="jsonBtnId">Submit JSON</button></div>
              <div className="col"><button className="btn btn-primary" id="clearBtnId" onClick={onClick}>Clear</button></div>
            </div>
 
            <textarea onChange = {(e) => { // reflect changes in the textarea after uploading file.
              setFileContent(e.target.value);
            }} className="form-control" placeholder="Enter your input Json File............" defaultValue= {fileContent}></textarea>

           

            <div className="uploadFile">
              <input
                type="file" accept=".json,.txt" id="fileInput" className="jsonUpload" aria-describedby="fileHelp"
                onChange={handleFileChange}
              />
              <span>*Upload <b>JSON</b> File or Type json in text area below to display dynamic Form.</span>
            </div>

          </div>
        </div>
      </div>  
      </div>
  )
}





















