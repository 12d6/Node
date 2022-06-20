import React from 'react';
import Navbar from './Navbar';
import {Route,Routes} from 'react-router-dom';
import SignUp from './SignUp';
import Delete from './Delete'
import Display from './Display';
import ImageUpload from './ImageUpload';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="SignUp" element={<SignUp/>}/> 
      <Route path="Delete" element={<Delete/>}/>
      <Route path="Display" element={<Display  />}/> 
      <Route path="ImageUpload" element={<ImageUpload  />}/> 
     
      </Routes>
    </div>
  );
}
export default App;
