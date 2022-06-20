// import React,{useState} from 'react';
// import Axios from "axios";
// const intial={
//   uname:'',
//   pass:'',
//   check:'',
 

  
// }

// const Login = () => {
  
//   const[form,setForm]=useState(intial)
//   const handleinput=(e)=>{
//     const name=e.target.name
//     const value=e.target.value
//     setForm({...form,[name]:value})
//   }
//    const formsubmit=(e)=>{
//      e.preventDefault();
//      setForm(intial);
     
//    }
//    const Change=()=>{
     

//    }
   
//   return (
//     <div>
//       <center>
//       <div className='contactbox'>
//         <h2 className='lolo'>login</h2>
//         <form onSubmit={formsubmit}>
//         <label>User Name</label>
//         <br></br>
//         <input type="text" name="uname" value={form.uname} onChange={handleinput}></input>
//         <br></br>
//         <label>Password</label>
//         <br></br>
//         <input type='password' name="pass" value={form.pass} onChange={handleinput}></input>
//         <br></br>
//         <input type="checkbox" name="check" value={form.check} onChange={handleinput}></input>
//         <label>Remember Me</label>
//         <br></br>
//         <br></br>
//         <button type="submit" onChange={Change}>Login</button>
//         <br></br>
//         <br></br>
//         Forgot 
//         Password
//         </form>
        
//       </div>
//       </center>
      
//     </div>
//   );
// };

// export default Login;