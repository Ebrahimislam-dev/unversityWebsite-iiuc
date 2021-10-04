import React from 'react';

const Contactus = () => {
    return (

        <div>

            <div>

                <div className="row">
                    <h1>
                        CONTACT US
                    </h1>
                    <div className="col-md-5 text-start ms-3">
                        <h5>
                            International Islamic University Chittagong
                        </h5>
                        <p>
                            Kumira, Chittagong-4318, Bangladesh <br />
                            IP Tel.: +8809613230505 <br />

                            Tel.: +88-03042-51153,+88-03042-51155,+88-03042-51156, +88-03042-51154-61 <br />
                            Fax.: 03042 51160 <br />
                            Email: info@iiuc.ac.bd
                        </p>
                    </div>
                    <div className="col-md-5 text-start ms-3">
                        <h5>
                            For Admission Related Query
                        </h5>
                        <p>
                            Tel.: +88-03042-51154-61, Ext. 317, 390 <br />
                            Mobile No.: 01720478621, 01844072000 <br />
                            MBA/MBM.: 01817356400 <br />
                            Mobile Numbers remain open during office hour (08.30 AM to 04.00 PM) <br />
                            Weekly Holiday: Thursday & Friday <br />
                            Email Address: acad@iiuc.ac.bd <br />
                        </p>
                    </div>
                    <div className="col-md-5 text-start ms-3">
                        <h5>
                            For Certificate Verification
                        </h5>
                        <p>
                            Tel.: +88-03042-51154-61, Ext. 385 <br />
                            IP PABX: +8809613230513 <br />
                            Email Address: coe@iiuc.ac.bd, iiuczahed@gmail.com, info@iiuc.ac.bd
                        </p>
                    </div>
                    <div className="col-md-5 text-start ms-3">
                        <h5>
                            For Technical Query
                        </h5>
                        <p>
                            Tel.: +88-03042-51154-61, Ext. 384, 3060 <br />
                            Mobile: 01832223310 <br />
                            Email Address: webmaster@iiuc.ac.bd, mahin.cse@gmail.com
                        </p>
                    </div>


                </div>
            </div>
            <div>

                <div className="bg-dark p-5 rounded">
                    <h3 className="text-center m-3">Sign Up for newsletter</h3>
                    <form>
                        <div className="row mb-3">
                            <label
                                htmlFor="inputName"
                                className="col-sm-2 col-form-label col-form-label-sm "
                            >
                                Name
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="name"
                                    className="form-control form-control-sm "
                                    id="inputName"
                                    placeholder="enter your name"
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="colFormLabelSm"
                                className="col-sm-2 col-form-label col-form-label-sm"
                            >
                                Email
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="email"
                                    className="form-control form-control-sm "
                                    id="colFormLabelSm"
                                    placeholder="enter your email"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contactus;