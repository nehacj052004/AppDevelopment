import { createContext, useContext, useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Context= createContext();
export const States=({children})=>{
    const navigate= useNavigate();

    // const[user,setUser]=useState(null)

    const[firstname,setFirstName]=useState("");
    const[lastname,setLastName]=useState("");
    const[pwd,setPwd]=useState("");
    const[confirmpwd,setConfirmpwd]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[age,setAge]=useState(0);



    const SignUpDB=(StudentID)=>{
        axios.post("",
        {sid:StudentID,
         firstname:firstname,
         lastname:lastname,
         pwd:pwd,
         confirmpwd:confirmpwd,
         age:age
        }
        ).then((response)=>{
            console.log(response);
            navigate("/user/home");
        });
    };

    return(
        <Context.Provider value={{
            firstname,
            setFirstName,
            lastname,
            setLastName,
            pwd,
            setPwd,
            confirmpwd,
            setConfirmpwd,
            email,
            setEmail,
            phone,
            setPhone,
            age,
            setAge,
            SignUpDB
        }}>
            {children}
        </Context.Provider>
    );
}

export const useStates = () => useContext(Context);