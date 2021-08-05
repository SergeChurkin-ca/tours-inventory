import React from "react";
import NewTourForm from "./NewTourForm.js";
import TourEditTable from "./TourEditTabel.js";

const ManageTable = () => {
 
    return (
      <div className="tour-booking-list">
        <NewTourForm />
        <TourEditTable />
      </div>
    );
}

export default ManageTable;

