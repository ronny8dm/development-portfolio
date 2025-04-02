
function About({ bio, ido, years, image, video, resumedownload }) {
    return (
        <>
            <section id="about" className="section bg-blackpp-scrollable d-flex align-items-center position-absolute">
                <div className="intro">
                    <div className="scroll-wrap">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 pr-md-5 pr-lg-0">
                                    <div className="mb-4 text-light">About me</div>
                                    <h2 className="text-light"  dangerouslySetInnerHTML={{ __html: bio }}></h2>
                                    <div className="mt-5 pt-2"
                                        dangerouslySetInnerHTML={{ __html: ido }}
                                    />
                                    <a target="_blank" rel="noreferrer" href={resumedownload} className="btn">Download Resume</a>
                                </div>
                                <div className="mt-5 mt-md-0 col-md-6 col-lg-5  offset-lg-1">
                                    <div className="position-relative">
                                        <img alt="" className="border-radius w-100" src={image} />
                                        {video && (
                                            <a href={video} className="icon-play popup-youtube"><span></span></a>
                                        )}
                                        <div className="experience-info">
                                            <div className="experience-number">{years}</div>
                                            <div className="experience-text">YEARS<br /> WORKING <br /> EXPERIENCE</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About