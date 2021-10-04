import React from 'react';

const About = () => {
    return (
        // About Section
        <div className=" p-4 bg-black">
            <div className="  bg-dark text-white-50 card mb-3 justify-content-center align-items-center">
                <div className="row g-0">
                    <div className="col-sm-6 m-auto">
                        <div className="card-body">
                            <h5 className="card-title ">
                                OUR History
                            </h5>
                            {/* Description About */}
                            <p className="card-text text-start">
                                International Islamic University Chittagong (IIUC) is one of the top graded Government approved private universities in Bangladesh. The credit for the idea of establishing this University goes to Islamic University Chittagong Trust (IUCT), which is the founder organization of the University. This Trust is a non-political and non-profit oriented voluntary organization, registered with the Government of the People’s Republic of Bangladesh under the Societies Act XXI of 1860. This Trust felt the need for a university under private initiative in view of the absence of institutions of higher learning based on Islamic vision of life in the public sector. With this idea having its origin in 1990, the Trust discussed the concept of a private Islamic university with a group of intellectuals, Islamic thinkers, and educationists, from home and abroad. It was these Islamic personalities that came forward to materialize the dream of such an institution by putting their ideas, energies and fulfilling other requirements. In 1992 an anchor organization called Islamic University Chittagong Trust (IUCT) was founded under the aegis of this body and by the grace of Allah (SWT), an institution of higher learning under the name of Islamic University Chittagong got the Government’s approval on February 11, 1995 and the University was founded accordingly in the same year. Thus a long cherished dream of the people of Chittagong came into reality. In the year 2000 Islamic University Chittagong (IUC) was upgraded into International Islamic University Chittagong (IIUC), thus it got a scope to extend its services to the Ummah at large.
                                In 2004 IIUC was recognized as one of the 9 top-graded Private Universities by a Government-appointed High Powered Team led by the UGC Chairman. At present, it is the largest private university with 370 (Full time: 270 & Adjunct: 100) teachers and 14000 students from home and abroad. A good number of full-time teachers and students are studying abroad for pursuing higher studies with IIUC’s scholarship or financial assistance or continuation of services.
                                The Graduation degrees of CSE, EEE , CCE are accredited by the BAETE. IIUC grants waiver, generous financial assistances and scholarships to the students at different rates depending on the results of their previous examinations and financial condition. IIUC participated in different national and international contests, winning prizes for obtaining prestigious positions. IIUC successfully organized five International Conferences on different important issues relating to education, ethics and Islamization of knowledge. It also arranged ‘National Computer Programming Contest’ (NCPC-2004) in collaboration with the Ministry of Science & ICT and Bangladesh Computer Council (BCC) as part of its regular programs.
                            </p>
                        </div>
                    </div>
                    {/* About Video Section */}
                    <div className="col-sm-6 m-auto " style={{ width: "auto" }}>
                        
                        <iframe width="560" height="615" src="https://www.youtube.com/embed/KmL860uBo2k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default About;