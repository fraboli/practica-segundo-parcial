import React, { useState } from 'react';
function Guardar({ userName, fullName, age }) {
    const [display, setDisplay] = useState(false);
    const printValues = (e) => {
        e.preventDefault();
        setDisplay(true);
      };
    return (
        <>
            <form onSubmit={printValues}>
            <button type="submit" onClick={printValues}>
            Submit
            </button>   
            {display && (
                <>
                <h4>Request Sent to DB with below request data</h4>
                <ul>
                    <li>UserName: {userName.toUpperCase()}</li>
                    <li>FullName: {fullName.toUpperCase()}</li>
                    <li>Age: {age}</li>
                </ul>
                </>
            )}
            </form>
        </>
    );
}
export default Guardar;