import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import Select from "react-select";
const Filter = () => {
  const msg = useContext(Context);
  const [show, setShow] = useState({});
  const { propertyListing } = msg;
  const arr = propertyListing.map((x) => ({
    value: x.id,
    label: x.postcode,
  }));

  const handleOption = (e) => {
    setShow({ id: e.value, postcode: e.label });
  };
  console.log(show);
  const check = propertyListing.filter((x) => x.id === show.id);
  console.log(check);
  return (
    <div>
      <h2>Best Site for Purchasing Properties at viable rates</h2>
      <p>Don't have enough time filter through different parameters:</p>
      <Select options={arr} onChange={handleOption} />
      {check
        ? check.map((x) => (
            <div className="card">
              <div className="card-body">
                <p className="card-text">NAME:{x.title}</p>
                <p className="card-text">ADDRESS:{x.address}</p>
                <p className="card-text">PRICE:${x.price}</p>
                <Link className="btn btn-primary" to={`/details/${x.id}`}>
                  PROPERTY LINK
                </Link>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Filter;
