import { useState } from 'react';

function Contact({ quote, address, phone, email }) {
    const [name, setName] = useState("");
    const [iemail, isetEmail] = useState("");
    const [message, setMessage] = useState("");

    const submitForm = (e) => {
        window.open(
            `mailto:${email}?subject=${encodeURIComponent(
                "Quote Request from " + name
            )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
                iemail
            )}): ${encodeURIComponent(message)}`
        );
    };

    return (
        <>
            <section id="contact" className="navbar-is-white text-white section pp-scrollable position-absolute"
                style={{ backgroundImage: "url('img/bg/contact.jpg')" }}>
                <div className="intro">
                    <div className="scroll-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <h2 className="text-white">Contact</h2>
                                    <p className="text-muted">{quote}</p>
                                    <h3 className="text-white mt-5 pt-5">{address}</h3>
                                    <h3 className="text-white">{phone}</h3>
                                    <p className="text-muted mt-3">{email}</p>
                                </div>
                                <div className="col-md-5 offset-md-2">
                                    <h3 className="text-white mt-0">Let's grab a coffee and jump on conversation <span
                                        className="text-primary">chat with me.</span></h3>
                                    <div className="mt-5">
                                        <form onSubmit={submitForm}>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    placeholder="Name"
                                                    onChange={(e) => setName(e.target.value)}
                                                    value={name}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input 
                                                    type="email" 
                                                    name="email" 
                                                    className="form-control"
                                                    placeholder="Email *"
                                                    value={iemail}
                                                    required
                                                    onChange={(e) => isetEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <textarea 
                                                    rows="3" name="message" 
                                                    className="form-control"
                                                    placeholder="Message"
                                                    value={message}
                                                    required
                                                    onChange={(e) => setMessage(e.target.value)}
                                                ></textarea>
                                            </div>
                                            {/* <div className="message" id="success-message">Your message is successfully sent... */}
                                            {/* </div> */}
                                            {/* <div className="message" id="error-message">Sorry something went wrong</div> */}
                                            <div className="form-group mb-0">
                                                <button type="submit" className="btn">Contact me</button>
                                            </div>
                                        </form>
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

export default Contact