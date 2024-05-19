import React from 'react'
import img2 from '../img/vendor-1.jpg'
import img3 from '../img/vendor-2.jpg'
import img4 from '../img/vendor-3.jpg'
import img5 from '../img/vendor-4.jpg'
import img6 from '../img/vendor-5.jpg'
import img7 from '../img/vendor-6.jpg'
import img8 from '../img/vendor-7.jpg'
import img9 from '../img/vendor-8.jpg'
import img10 from '../img/vendor-9.jpg'
function Services() {
  return (
    <div>
        {/* Top */}
        <div class="container-fluid bg-dark px-5 d-none d-lg-block">
        <div class="row gx-0">
            <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center" style={{height: "45px"}}>
                    <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</small>
                    <small class="me-3 text-light"><i class="fa fa-phone-alt me-2"></i>+012 345 6789</small>
                    <small class="text-light"><i class="fa fa-envelope-open me-2"></i>info@example.com</small>
                </div>
            </div>
            <div class="col-lg-4 text-center text-lg-end">
                <div class="d-inline-flex align-items-center" style={{height: "45px"}}>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-twitter fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-instagram fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i class="fab fa-youtube fw-normal"></i></a>
                </div>
            </div>
        </div>
    </div>
    {/* Navbar */}
    <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="index.html" class="navbar-brand p-0">
                <h1 class="m-0"><i class="fa fa-user-tie me-2"></i>Startup</h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a href="index.html" class="nav-item nav-link">Home</a>
                    <a href="about.html" class="nav-item nav-link active">About</a>
                    <a href="service.html" class="nav-item nav-link">Services</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                        <div class="dropdown-menu m-0">
                            <a href="blog.html" class="dropdown-item">Blog Grid</a>
                            <a href="detail.html" class="dropdown-item">Blog Detail</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div class="dropdown-menu m-0">
                            <a href="price.html" class="dropdown-item">Pricing Plan</a>
                            <a href="feature.html" class="dropdown-item">Our features</a>
                            <a href="team.html" class="dropdown-item">Team Members</a>
                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                            <a href="quote.html" class="dropdown-item">Free Quote</a>
                        </div>
                    </div>
                    <a href="contact.html" class="nav-item nav-link">Contact</a>
                </div>
                <butaton type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton>
                <a href="https://htmlcodex.com/startup-company-website-template" class="btn btn-primary py-2 px-4 ms-3">Download Pro Version</a>
            </div>
        </nav>

        <div class="container-fluid bg-primary py-5 bg-header" style={{marginBottom: "90px"}}>
            <div class="row py-5">
                <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 class="display-4 text-white animated zoomIn">Services</h1>
                    <a class="h5 text-white">Home</a>
                    <i class="far fa-circle text-white px-2"></i>
                    <a class="h5 text-white">Services</a>
                </div>
            </div>
        </div>
    </div>

    {/* Full screen search bar */}
    <div class="modal fade" id="searchModal" tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content" style={{background: "rgba(9, 30, 62, .7)"}}>
                <div class="modal-header border-0">
                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex align-items-center justify-content-center">
                    <div class="input-group" style={{maxWidth: "600px"}}>
                        <input type="text" class="form-control bg-transparent border-primary p-3" placeholder="Type search keyword"/>
                        <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Services */}
<div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
                <h1 className="mb-0">Custom IT Solutions for Your Successful Business</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa fa-shield-alt text-white"></i>
                        </div>
                        <h4 className="mb-3">Cyber Security</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa fa-chart-pie text-white"></i>
                        </div>
                        <h4 className="mb-3">Data Analytics</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa fa-code text-white"></i>
                        </div>
                        <h4 className="mb-3">Web Development</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fab fa-android text-white"></i>
                        </div>
                        <h4 className="mb-3">Apps Development</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa fa-search text-white"></i>
                        </div>
                        <h4 className="mb-3">SEO Optimization</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                        <h3 className="text-white mb-3">Call Us For Quote</h3>
                        <p className="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                        <h2 className="text-white mb-0">+012 345 6789</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

{/* Vendor */}
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5 mb-5">
            <div class="bg-white">
                <div class="owl-carousel vendor-carousel">
                    <img src={img2} alt=""/>
                    <img src={img3} alt=""/>
                    <img src={img4} alt=""/>
                    <img src={img5} alt=""/>
                    <img src={img6} alt=""/>
                    <img src={img7} alt=""/>
                    <img src={img8} alt=""/>
                    <img src={img9} alt=""/>
                    <img src={img10} alt=""/>
                </div>
            </div>
        </div>
    </div>
    
    {/* Footer */}
    <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-4 col-md-6 footer-about">
                    <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                        <a href="index.html" className="navbar-brand">
                            <h1 className="m-0 text-white"><i className="fa fa-user-tie me-2"></i>Startup</h1>
                        </a>
                        <p className="mt-3 mb-4">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                                <button className="btn btn-dark">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-md-12 pt-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Get In Touch</h3>
                            </div>
                            <div className="d-flex mb-2">
                                <i className="bi bi-geo-alt text-primary me-2"></i>
                                <p className="mb-0">123 Street, New York, USA</p>
                            </div>
                            <div className="d-flex mb-2">
                                <i className="bi bi-envelope-open text-primary me-2"></i>
                                <p className="mb-0">info@example.com</p>
                            </div>
                            <div className="d-flex mb-2">
                                <i className="bi bi-telephone text-primary me-2"></i>
                                <p className="mb-0">+012 345 67890</p>
                            </div>
                            <div className="d-flex mt-4">
                                <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                <a className="btn btn-primary btn-square" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Quick Links</h3>
                            </div>
                            <div className="link-animated d-flex flex-column justify-content-start">
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                                <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Popular Links</h3>
                            </div>
                            <div className="link-animated d-flex flex-column justify-content-start">
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                                <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid text-white" style={{background: "#061429"}}>
        <div className="container text-center">
            <div className="row justify-content-end">
                <div className="col-lg-8 col-md-6">
                    <div className="d-flex align-items-center justify-content-center" style={{height: "75px"}}>
                        <p className="mb-0">&copy; <a className="text-white border-bottom" href="#">Your Site Name</a>. All Rights Reserved. 
						
						Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </div>
  )
}

export default Services