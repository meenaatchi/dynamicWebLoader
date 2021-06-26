import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/form.css'; 
import {useHistory} from 'react-router-dom';

export default function Form({datas, setDatas}) {

  const urlbar = useHistory();

  const [filename, setFilename] = useState('');
  const [fileContent, setFileContent] = useState('');
  const [show, setShow] = useState(false);
  

  const handleFileChange = e => {
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

  const onClick = ()=> {
    window.location.reload();  
  }

  const handleSubmit = (e) => {  
    if(fileContent === '') {
      alert('Please select a file');
      return;
    }
    setDatas(fileContent); 
    setShow(true); 
    urlbar.push('/builder')
  }

  

  return (
    <div style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
       
      <div className = "col-sm-12">
        <div className="container-page">
          <div className="form-group" id="text_area">

            <div className="row">
              <div className="col-8"><label htmlFor="jsonInputFrom">JSON Input: </label></div>
              <div className="col"><button  onClick = {handleSubmit} className="btn btn-primary" id="jsonBtnId">Submit JSON</button></div>
              <div className="col"><button className="btn btn-primary" id="clearBtnId" onClick={onClick}>Clear</button></div>
            </div>
 
            <textarea onChange = {(e) => {
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






















// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filename: '',
//       fileContent: ''
//     };
//   } 

  // handleFileChange = e => {
  //   let file = e.target.files;
  //   console.log(file);
    
  //   const reader = new FileReader();
  //   reader.readAsText(file[0]);

  //   reader.onloadend = () => {
  //     try {
  //       JSON.parse(reader.result);
  //       this.setState({filename: file[0].name, fileContent: reader.result});
  //       console.log('Json_Content: ', reader.result);
  //     } catch (err) {
  //       alert('Given Json File is incorrect or invalid json format, Please review the file and try again.');
  //     }
  //   }
  //   reader.onerror = () => {
  //     console.log('file error', reader.error);
  //   }

  // }

  // onClick() {
  //   window.location.reload(); 
  // }

//   render() {
//       return (
      // <form>
      //   <div className="container-page">
      //     <div className="form-group" id="text_area">

      //       <div className="row">
      //         <div className="col-8"><label htmlfor="jsonInputFrom">JSON Input: </label></div>
      //         <div className="col"><button type="submit" className="btn btn-primary" id="jsonBtnId">Submit JSON</button></div>
      //         <div className="col"><button className="btn btn-primary" id="clearBtnId" onClick={this.onClick}>Clear</button></div>
      //       </div>

      //       <div className="container"></div>

      //       <div className="form-group"></div><textarea className="form-control" placeholder="Enter your input Json File............" defaultValue= {this.state.fileContent}></textarea>

      //       <div className="container"></div>

      //       <div className="uploadFile">
      //         <input
      //           type="file" accept=".json,.txt" id="fileInput" className="jsonUpload" aria-describedby="fileHelp"
      //           onChange={this.handleFileChange}
      //         />
      //         <span>*Upload <b>JSON</b> File or Type json in text area below to display dynamic Form.</span>
      //       </div>

      //     </div>
      //   </div>
      // </form>
//     );
//   }
// } 

// export default Form;
