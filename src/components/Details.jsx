import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import {Context} from '../Context'
const Details = () => {
  const msg = useContext(Context);
  const { propertyListing } = msg;
  const { id } = useParams();
  console.log(id)
  const check = propertyListing.filter((x) => x.id === Number(id))
  console.log(check)
  return (
    <div>
     {check.map((x) => (
       <div key={x.id}>
         <p>ADDRESS:{x.address}</p>
         <p>DETAILS:{x.details}</p>
         <p>FEATURES:{x.features}</p>
       </div>
     ))}
    </div>
  );
};

export default Details;
