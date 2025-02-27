import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="containerrr">
                    <div className="row">
                        <div className="col">
                            <h4>Company</h4>
                            <a href="#">About Us</a>
                            <a href="#">Contact Us</a>
                            <a href="#">Reservation</a>
                            <a href="#">Menu</a>
                            <a href="#">Service</a>
                        </div>
                        <div className="col">
                            <h4>Contact</h4>
                            <p><i className="fa fa-map-marker-alt"></i>  123 Street, Abuja, Nigeria</p>
                            <p><i className="fa fa-phone-alt"></i>  +234 345 67890</p>
                            <p><i className="fa fa-envelope"></i>  info@nexuseats.com</p>
                            <div className="sociall">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col">
                            <h4>Opening</h4>
                            <p>Monday - Saturday: <br />09AM - 09PM</p>
                            <p>Sunday: 10AM - 08PM</p>
                        </div>
                        <div className="col">
                            <h4>Newsletter</h4>
                            <p>Join our newsletter to receive emails on our new menus</p>
                            <div className="newsletter">
                                <input type="text" placeholder="Your email" />
                                <button>SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <br />
                <div className="roww">
                    &copy; NexusEats, All Right Reserved 2025.
                </div>
            </div>
        </footer>
    );
};

export default Footer;