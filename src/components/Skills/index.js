
function Skills({ skills, title, subtitle }) {
    return (
        <>
            <section id="skills" className="section pp-scrollable d-flex align-items-center position-absolute">
                <div className="intro">
                    <div className="scroll-wrap">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="position-relative">
                                        <div className="photo-icon photo-icon-1"><img alt="" className="w-100"
                                            src="img/100x100.jpg" /></div>
                                        <div className="photo-icon photo-icon-2"><img alt="" className="w-100" src="img/80x80.jpg" />
                                        </div>
                                        <div className="photo-icon photo-icon-3"><img alt="" className="w-100"
                                            src="img/100x100-2.jpg" /></div>
                                        <img alt="" className="border-radius w-100" src="img/skills.jpg" />
                                    </div>
                                </div>
                                <div className="mt-5 mt-lg-0 col-lg-5 offset-lg-1">
                                    <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                                    <p className="mb-5" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
                                    {skills?.map(({ title, skills }) => (
                                        <div className="exp_skills">
                                            <h4>{title}</h4>
                                            <div className="mb-4 pt-2 skills_wrapper">
                                                {skills?.map((skill) => (
                                                    <div className="skill-item">
                                                        <h6 className="mt-0">{skill}</h6>
                                                    </div>
                                                ))}
                                            </div>
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

export default Skills