import React from "react";
// import firebase  from "firebase";
import NewTourForm from "./NewTourForm.js";
// import TourMenu from "../pages/TourMenu.js";
import TourEditTable from "./TourEditTabel.js";

const ManageTable = () => {
 

  // render() {
    return (
      <div className="tour-booking-list">
        <NewTourForm />
       <TourEditTable />
      </div>
    );
  // }
}

export default ManageTable;

