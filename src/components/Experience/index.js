
function Experience({ works }) {
    return (
        <>
            <section id="experience"
                className="navbar-is-white text-white section pp-scrollable d-flex align-items-center position-absolute"
                style={{ backgroundImage: "url('img/bg/experience.jpg')" }}>
                <div className="intro">
                    <div className="scroll-wrap">
                        <div className="container">
                            <h2 className="text-white mb-0">Experience</h2>
                            <div className="mt-5 pt-5">
                                <div className="carousel-experience owl-carousel">
                                    {works?.map((item, index) => (
                                        <div key={index} className="experience-item">
                                            {item?.map((item, index) => (
                                                <div key={index} className="row row-experience">
                                                    {/* <div className="col-md-2"><a href=""><img loading="lazy" alt="" src={item?.image} /></a></div> */}
                                                    <div className="col-md-5 my-4">
                                                        <h3 className="my-0 text-white">{item?.title}</h3>
                                                        {item?.years} 
                                                        <h5 className="my-2 text-white">{item?.company}</h5>
                                                    </div>
                                                    <div className="col-md-7" dangerouslySetInnerHTML={{ __html: item?.description }} />
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience