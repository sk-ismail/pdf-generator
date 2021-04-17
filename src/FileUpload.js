import React, { useState } from 'react';
import './FileUpload.css';
import { PDFExport, savePDF} from '@progress/kendo-react-pdf';
import { Button, } from '@progress/kendo-react-buttons'

import '@progress/kendo-theme-material/dist/all.css';
import { useRef } from 'react';

function FileUpload() {

    const [selcted, setselcted] = useState([]);
   
    const changeHandler =(e)=>{

        //console.log(e.target.files)
        if(e.target.files){
             const filesArr= Array.from(e.target.files).map((file)=> URL.createObjectURL(file));
        //console.log(filesArr);

        setselcted((previewImg)=> previewImg.concat(filesArr));

        Array.from(e.target.files).map((file)=> URL.revokeObjectURL(file))
    
    
    }
    }

    

       const pdfExportMethod=useRef(null);

       const handleMethod =()=>{
           savePDF(pdfExportMethod.current, { paperSize: "A4" });
       }

    return (
        <div className='files'>
            <div>
            <label htmlFor='file' > <i className='material-icons'>add_photo_alternate</i></label>
			<input type="file" name="file"  onChange={changeHandler} multiple />	
		</div>
        <PDFExport>
        <div ref={pdfExportMethod} className='imagediv'>
        {selcted.map((photo)=> <img className='images' src={photo} key={photo} alt='images'/>)}
        </div>
        </PDFExport>
        <Button primary={true}  onClick={()=>handleMethod()}>
          Convert to pdf!
       </Button>
        </div>
    )
}

export default FileUpload
