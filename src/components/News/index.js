
function News() {
    return (
        <>
            <section id="news" className="section pp-scrollable position-absolute">
                <div className="intro">
                    <div className="scroll-wrap">
                        <div className="container">
                            <div className="d-block d-md-flex align-items-center justify-content-between">
                                <h2 className="mb-0 mb-3 mb-md-0">Journal</h2>
                                <a href="#" className="btn">View all</a>
                            </div>
                            <div className="mt-5 pt-4">
                                <div className="news-row row">
                                    <div className="col-lg-4">
                                        <a href="#"><img alt="" className="w-100" src="img/news/1.jpg" /></a>
                                        <p className="mt-4">Personal 01 / June, 2020</p>
                                        <h4 className="mt-3">Scent in the voyages</h4>
                                        <a href="">Read more 🡒</a>
                                    </div>
                                    <div className="col-lg-4">
                                        <a href="#"><img alt="" className="w-100" src="img/news/2.jpg" /></a>
                                        <p className="mt-4">Travel 02 / June, 2020</p>
                                        <h4 className="mt-3">Given void great you’re good</h4>
                                        <a href="">Read more 🡒</a>
                                    </div>
                                    <div className="col-lg-4">
                                        <a href="#"><img alt="" className="w-100" src="img/news/3.jpg" /></a>
                                        <p className="mt-4">Inspiration 03 / June, 2020</p>
                                        <h4 className="mt-3">Secrets of the serpents</h4>
                                        <a href="">Read more 🡒</a>
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

export default News