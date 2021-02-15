import React, { useContext } from "react";
import { Context } from "../Context";
import {Link} from 'react-router-dom'

const MainPage = () => {
  const msg = useContext(Context);
  const { propertyListing } = msg;
  console.log(propertyListing);
  return (
    <>
        
          <div className="row">
          {propertyListing.map((x) => (
          <div key={x.id} className="col-sm-6">
            <div className="card">
              <img className="card-img-top" src={`/server/${x.image}`} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">{x.title}</h5>
                <p className="card-text">{x.description}</p>
                <h5 className="card-footer">Price:${x.price}</h5>
                <Link className="btn btn-primary" to={`/details/${x.id}`}>
                        Go to property
                </Link>
              </div>
            </div>
          </div>
           ))}
        </div>
    </>
  );
};

export default MainPage;
/*{propertyListing.map((x) => ())}*/