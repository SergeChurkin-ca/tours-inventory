import React, { useState } from "react";
import ManageTable from "../components/ManageTable";

const ManageInventory = () => {
  const password = "admin";
  const [authorize, setAuthorize] = useState(false);

  const authorization = (e) => {
    e.preventDefault();
    const passEntry = e.target.querySelector('input[type="password"]').value;
    return password !== passEntry
      ? alert("wrong password")
      : password === passEntry
      ? setAuthorize(true)
      : setAuthorize(false);
  };

  const login = (
    <div className="authorize">
      <h4>please login to proceed</h4>
      <p>(password hint this time: 'admin')</p>
      <form action="#" onSubmit={authorization}>
        <input type="password" placeholder="Password" />
        <input type="submit" value="login" />
      </form>
    </div>
  );

  return (
    <>
        {authorize || login}
        {authorize && <ManageTable /> }
      
    </>
  );
};

export default ManageInventory;

// has to rename into auth from anageinventory
