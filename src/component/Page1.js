import React from "react";

function Page1(){

    return(
        <>
            <div className="page1">
               <header id="home" class="main-header header-style-two">

                  <div class="header-top">
                    <div class="inner-container">
                        <div class="top-left">

                            <ul class="list-style-one">
                                <li><i class="fa fa-envelope"></i> <a
                                       href="mailto:ashuilubajaj099@gmail.com"><span>ashuilubajaj099@gmail.com</span></a>
                                </li>
                                <li><i class="fa fa-map-marker"></i>ACES Layout Banglore</li>
                            </ul>
                        </div>
                        <div class="top-right">
                            <ul class="useful-links">
                               {/* <!-- <li><a href="index.php#">Help</a></li> -->
                                <!-- <li><a href="index.php#">Support</a></li> --> */}
                               <li><a href="">Contact</a></li>
                            </ul>
                            <ul class="social-icon-one">
                                {/* <!-- <li><a href="index.php#"><span class="fab fa-twitter"></span></a></li> --> */}
                               <li><a href=""><span
                                             class="fab fa-facebook-square"></span></a></li>
                               {/* <!-- <li><a href="index.php#"><span class="fab fa-pinterest-p"></span></a></li> --> */}
                              <li><a href="https://www.linkedin.com/in/ashutosh-bajaj-a51588175/"><span
                                           class="fab fa-linkedin"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="header-lower">

                    <div class="main-box">
                       <div class="logo-box">
                            <div class="logo"><a href="index.html"><img style="width: 70px;height: 70px;"
                                        src="" alt title="FTW"/></a></div>
                        </div>

                       <div class="nav-outer">
                            <nav class="nav main-menu">
                                <ul class="navigation onepage-nav">
                                  <li class="current"><a href="index.html#home">Home</a></li>
                                  <li><a href="index.html#about">About</a></li>
                                  <li><a href="index.html#services">Services</a></li>
                                  <li><a href="index.html#testimonials">Testimonial</a></li>
                                  {/* <!-- <li><a href="index.php#news">News</a></li> --> */}
                                  <li><a href="index.html#contact">Contact</a></li>
                                </ul>
                            </nav>

                        </div>
                        <div class="outer-box">
                            <a href="tel:+91 6205545358" class="info-btn">
                               <i class="icon flaticon-phone-ringing"></i>
                               +91 6205545358
                            </a>

                            <button class="ui-btn ui-btn search-btn">
                               <span class="icon lnr lnr-icon-search"></span>
                            </button>
                            <a href="index.html#" class="theme-btn btn-style-one dark-bg"><span
                                     class="btn-title">Get a quote</span></a>

                             <div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div>
                        </div>
                    </div>
                </div>

                <div class="mobile-menu">
                    <div class="menu-backdrop"></div>

                    <nav class="menu-box">
                        <div class="upper-box">
                            <div class="nav-logo"><a href="index.html"><img src="" alt title /></a></div>
                            <div class="close-btn"><i class="icon fa fa-times"></i></div>
                        </div>
                        <ul class="navigation onepage-nav clearfix">

                        </ul>
                       <ul class="contact-list-one">
                            <li>
  
                                <div class="contact-info-box">
                                    <i class="icon lnr-icon-phone-handset"></i>
                                    <span class="title">Call Now</span>
                                    <a href="tel:+92880098670">+91 6205545358</a>
                                </div>
                            </li>
                            <li>
  
                                <div class="contact-info-box">
                                    <span class="icon lnr-icon-envelope1"></span>
                                    <span class="title">Send Email</span>
                                    <a href="mailto:ashuilubajaj099@gmail.com"><span>ashuilubajaj099@gmail.com</span></a>
                                </div>
                            </li>
                            <li>

                                <div class="contact-info-box">
                                   <span class="icon lnr-icon-clock"></span>
                                   <span class="title">Send Email</span>
                                   Mon - Sun
                                </div>
                            </li>
                        </ul>
                        <ul class="social-links">
                            {/* <!-- <li><a href="index.php#"><i class="fab fa-twitter"></i></a></li> --> */}
                                <li><a href=""><i
                                           class="fab fa-facebook-f"></i></a></li>
                            {/* <!-- <li><a href="index.php#"><i class="fab fa-pinterest"></i></a></li> --> */}
                           <li><a href=""><i
                                      class="fab fa-instagram"></i></a></li>
                        </ul>
                    </nav>
                </div>

                <div class="search-popup">
                    <span class="search-back-drop"></span>
                    <button class="close-search"><span class="fa fa-times"></span></button>
                    <div class="search-inner">
                        <form method="post" action="index.html">
                            <div class="form-group">
                                <input type="search" name="search-field" value placeholder="Search..." required />
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </div>
                        </form>
                    </div>
                </div>


                <div class="sticky-header">
                    <div class="auto-container">
                        <div class="inner-container">

                            <div class="logo">
                                <a href="index.html" title><img src="images/logor.png" alt title /></a>
                            </div>

                           <div class="nav-outer">

                                <nav class="main-menu">
                                    <div class="navbar-collapse show collapse clearfix">
                                        <ul class="navigation onepage-nav clearfix">

                                        </ul>
                                    </div>
                                </nav>

                            <div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div>
                        </div>
                    </div>
               </div>
            </div>
          </header>
        </div>  
        </>
    );
}
export default Page1;