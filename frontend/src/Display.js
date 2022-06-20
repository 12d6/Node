import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Display = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword]=useState("");
    const [userdata,setUserdata]=useState([]);
    const [newpassword,setNewPassword]=useState("");
    const url="http://localhost:8000/report";
    const deleting=(email)=>{
        axios.delete(`http://localhost:8000/Delete/${email}`)
    }
    const update=(email)=>{
        axios.put("http://localhost:8000/update",{
            Email:email,
      Password:newpassword,
        })
        setNewPassword("")
    }
  
    useEffect(()=>{
        axios.get(url)
        .then((response)=>{
            setUserdata(response.data);
        })
    },[]);
    return (
        <div>
            <table>
                <tbody >
                    <tr>
                        <td>
                            <h4>Email</h4>
                        </td>
                        <td>
                            <h4>Password</h4>
                        </td>
                    </tr>
                    {userdata.map((val)=>{
                        return(
                            <tr>
                                <td>{val.Email}</td>
                                <td>{val.password}</td>
                                <td>
                                    <button onClick={()=>{deleting(val.Email)}}>DELETE</button>
                                  
                                </td>
                                <td>  <button onClick={()=>{update(val.Email)}}>Update</button></td>
                                <td><input type="text" onChange={(e)=>{
                                    setNewPassword(e.target.value)
                                }}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Display;