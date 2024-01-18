import React from "react";
import { useState } from "react";
import Guardar from './Guardar';
import "../style/Datos.css";
const initialState = {
    userName: "",
    fullName: "",
    age: ""
  };
function Datos() {
    const [form, setValues] = useState(initialState);
      const updateField = (e) => {
        setValues({
          ...form,
          [e.target.name]: e.target.value
        });
      };
    return (
        <div>
            <div className="">
                <label htmlFor="userName">
                Username:
                <input
                    value={form.userName || ""}
                    name="userName"
                    onChange={updateField}
                />
                </label>
            </div>
            <br />
            <div>
            <label htmlFor="fullName">
                FullName:
                <input
                value={form.fullName || ""}
                name="fullName"
                type="text"
                onChange={updateField}
                />
            </label>
            </div>
            <br />
            <div>
            <label htmlFor="age">
                Age:
                <input value={form.age || ""} name="age" onChange={updateField} />
            </label>
            </div>
            <Guardar {...form}/>
        </div>
        
    )
}
export default Datos;