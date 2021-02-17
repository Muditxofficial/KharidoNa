import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context";

const Details = () => {
  const msg = useContext(Context);
  const { propertyListing } = msg;
  const { id } = useParams();
  console.log(id);
  const check = propertyListing.filter((x) => x.id === Number(id));
  console.log(check);

  return (
    <div className="mdc-data-table">
      {check.map((x) => (
        <div key={x.id}>
          <table>
            <thead>
              <tr>
                <th>FEATURES:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <td>{x.features}</td>
                </th>
                <th>
                  <td>${x.price}</td>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Details;
