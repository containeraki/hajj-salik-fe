import React from 'react';
import reactjs from '../../img/easy.jpg';
import createReactApp from '../../img/bag.jpg';
import reactrouter4 from '../../img/Hajj-Return.jpg';
import bootstrap4 from '../../img/hassle.jpeg';



const HomeMiddle = () => {
    return (

        <section className="row">

        <div className="col-md-6 col-lg-12" align="center">
        <h2> What we doing?</h2><br/>
        </div>

        <div className="col-md-6 col-lg-3">
        <div className="card">
        <a href="javascript:void(null);" target="_blank">
        <img src={reactjs} className="card-img-top img-fluid" alt="ReactJS"/>
        </a>
        <div className="card-block">
        <h3 className="card-title">Easy Trasportation</h3>
        <p></p>
    </div>
    </div>
    </div>


    <div className="col-md-6 col-lg-3">
        <div className="card">
        <a href="javascript:void(null);" target="_blank">
        <img src={createReactApp} className="card-img-top img-fluid" alt="Create React App"/>
        </a>
        <div className="card-block">
        <h3 className="card-title">Cost Saving</h3>
        <p></p>
    </div>
    </div>
    </div>

    <div className="col-md-6 col-lg-3">
        <div className="card">
        <a href="javascript:void(null);" target="_blank">
        <img src={reactrouter4} className="card-img-top img-fluid" alt="React Router 4"/>
        </a>
        <div className="card-block">
        <h3 className="card-title">Convenient</h3>
    <p></p>
    </div>
    </div>
    </div>

    <div className="col-md-6 col-lg-3">
        <div className="card">
        <a href="javascript:void(null);" target="_blank">
        <img src={bootstrap4} className="card-img-top img-fluid" alt="Bootstrap 4" />
        </a>
        <div className="card-block">
        <h3 className="card-title">Secure & Insured 4</h3>
    <p></p>
    </div>
    </div>
    </div>

    </section>
);
};



export default HomeMiddle;
