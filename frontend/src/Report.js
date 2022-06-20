// import React,{useState,useEffect} from 'react';
// import axios from 'axios';


// const Report = () => {
//     const[userdata,setUserdata]=useState([]);
//     const url="http://localhost:8000/report";
//     const deleting=(ind)=>{
//         axios.post('http://localhost:8000/Delete/${ind}')
//     }
//    useEffect(()=>{
//     axios.get(url).then((response)=>{
//         setUserdata(response.data);
//     })
//    })
//     return (
//         <div>
//             <table className='ui very basic collapsing celled table'>
//             <tbody>
//                 <tr>
//                     <td>
//                     <h4 className="ui image header">
//                      <div className="content">Email</div>
//                        </h4>

//                     </td>
//                     <td>
//                     <h4 className="ui image header">
//                      <div className="content">Password</div>
//                        </h4>

//                     </td>
//                 </tr>
//                 </tbody>
//                 </table>



// );
// })}

// export default Report