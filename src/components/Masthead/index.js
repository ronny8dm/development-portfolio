import React from 'react'

function Masthead({ description, name }) {
    return (
        <>
            <section id="home"
                className="navbar-is-white text-white pp-scrollable d-flex align-items-center section position-absolute"
                style={{ backgroundImage: "url('img/bg/masthead.jpg')" }} role="main">
                <div className="intro">
                    <div className="scroll-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-xl-5">
                                    <div className="mb-2" dangerouslySetInnerHTML={{__html: description}}></div>
                                    <h1 className="text-white hero_heading"><span
                                        className="text-primary text-typed a-typed a-typed-about">Hello,</span> I'm {name}</h1>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Masthead