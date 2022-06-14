import { useState } from "react"

let timer

function Projects({ projects, github }) {
    const [active, setActive] = useState(null)

    const setNull = () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            setActive(null)
        }, 5000)
    }

    return (
        <>
            <section id="projects" className="navbar-is-white text-white section pp-scrollable position-absolute" style={{ backgroundImage: "url('img/bg/projects.jpg')" }}>
                <div className="project-wrap">
                    <div className="bg-changer">
                        <div className="section-bg active"></div>
                    </div>
                    <div className="intro">
                        <div className="scroll-wrap">
                            <div className="container">
                                <h2 className="text-white mb-0">Latest projects</h2>
                                <div className="mt-5 pt-2">
                                    <div className="row-project-box row">
                                        {projects?.map(({ title, category, image, url }) => (
                                            <div
                                                onMouseEnter={() => { clearTimeout(timer); setActive(image) }} onMouseLeave={setNull} className="col-project-box col-md-6 col-lg-4 col-xl-3"
                                            >
                                                <a
                                                    style={{
                                                        backgroundImage: `${active === image ? "url('img/bg/portfolio/" + active + "')" : 'none'}`,
                                                    }}
                                                    href={url} target="_blank" rel="noreferrer" className="project-box">
                                                    <div className="project-box-inner">
                                                        <h4>{title}</h4>
                                                        <div className="project-category">{category}</div>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <a target="_blank" rel="noreferrer" href={github} className="btn mt-5 mx-auto d-block" style={{ width: 'fit-content' }}>Visit my GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects