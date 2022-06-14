
function Testimonials({ testimonials }) {
    return (
        <>
            <section id="testimonials"
                className="navbar-is-white text-white section pp-scrollable d-flex align-items-center position-absolute"
                style={{ backgroundImage: "url('img/bg/testimonials.jpg')" }}>
                <div className="intro">
                    <div className="scroll-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-xl-5">
                                    <span className="icon-quote text-primary">"</span>
                                    <h2 className="title-uppercase text-white">Hey, this is <span
                                        className="text-primary">testimonials</span> from my best clients & partners</h2>
                                </div>
                                <div className="col-lg-5 col-xl-5  offset-lg-1 offset-xl-2">
                                    <div className="carousel-testimonials owl-carousel">
                                        {testimonials.map((testimonial, index) => (
                                            <div key={index}>
                                                <p className="mb-5"><strong>{testimonial?.user}</strong><br />{testimonial?.company}</p>
                                                <p>“ {testimonial?.text}
                                                </p>
                                            </div>
                                        ))}
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

export default Testimonials