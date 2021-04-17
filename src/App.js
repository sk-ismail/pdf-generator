import './App.css';

import '@progress/kendo-theme-material/dist/all.css';

import FileUpload from './FileUpload'

function App() {
 
  
  return (
    <div className="App">
     
       <div className='content'>
         <h1>Hi!</h1>
         <p>Upload the pictures!</p>
       </div>
      <FileUpload/>
 
    </div>
  );
}

export default App;
