
function Scrollbar() {
    return (
        <>
            <div className="progress-nav">
                <ul className="navbar-nav">
                    <li data-menuanchor="home" className="active"></li>
                    <li data-menuanchor="about"></li>
                    <li data-menuanchor="experience"></li>
                    <li data-menuanchor="skills"></li>
                    <li data-menuanchor="projects"></li>
                    <li data-menuanchor="testimonials"></li>
                    {/* <li data-menuanchor="news"></li> */}
                    <li data-menuanchor="contact"></li>
                </ul>
            </div>
        </>
    )
}

export default Scrollbar