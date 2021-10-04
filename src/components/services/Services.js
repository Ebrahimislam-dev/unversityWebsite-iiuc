import React from 'react';

const Services = (props) => {
     const { deptname, aboutdept, durability, img, cost } = props.service;
    // console.log(props);
    return (
        <div>
            <div>
                {/* Load data Card  */}
                <div className="card shadow-lg hero-card">
                    <div className="">
                        <img src={img} className="card-img-top herocard-img " alt="" />
                    </div>
                    {/* Showing data dynimically */}
                    <div className="mt-3 text-start hero-details">
                        <h6>Name: {deptname} </h6>
                        <h6>Country: {durability}</h6>
                        <h6>Work Experience: {aboutdept}</h6>
                        <h6 >Price: ${cost}</h6>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Services;