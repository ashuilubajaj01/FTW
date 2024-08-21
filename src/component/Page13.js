import React from "react";

function Page13(){

    return(
        <>
            <footer class="main-footer">
			<div class="bg bg-pattern-6"></div>

			<div class="footer-upper">
				<div class="auto-container">
					<div class="row">

						<div class="contact-info-block col-lg-4 col-md-6">
							<div class="inner">
								<i class="icon lnr-icon-map"></i>
								<div class="text">M P Nagar Zone 1 <br />Bhopal</div>
							</div>
						</div>

						<div class="contact-info-block col-lg-4 col-md-6">
							<div class="inner">
								<i class="icon lnr-icon-envelope1"></i>
								<div class="text">
									<a href="techkeedaa0666@gmailcom"><span>techkeedaa0666@gmail.com</span></a>
									<a href="tel:9406806727">+91 9406806727</a>
								</div>
							</div>
						</div>

						<div class="contact-info-block col-lg-4 col-md-6">
							<div class="inner">
								<i class="icon lnr-icon-clock"></i>
								<div class="text">Mon - Sat: 8:00 am to 6:00 pm <br />Sunday: CLOSED</div>
							</div>
						</div>
					</div>
				</div>
			</div>

            {/* <!-- ---------------------------------------------------------------------- --> */}

			<div class="widgets-section">
				<div class="auto-container">
					<div class="row">

						<div class="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12">
							<div class="footer-widget about-widget">
								<h5 class="widget-title">About</h5>
								<div class="widget-content">
									<div class="text">Techkeedaa specializes in transformative digital solutions,
										empowering businesses with innovation and dedicated client service. Our mission
										is to drive growth and success through tailored strategies and reliable support.
									</div>
									<ul class="social-icon-two">
										{/* <!-- <li><a href="index.php#"><i class="fab fa-twitter"></i></a></li> --> */}
										<li><a href="https://www.facebook.com/profile.php?id=61562079701806&mibextid=ZbWKwL"><i class="fab fa-facebook"></i></a></li>
										{/* <!-- <li><a href="index.php#"><i class="fab fa-pinterest"></i></a></li> --> */}
										<li><a href="https://www.instagram.com/techkeedaa0666?igsh=Zm03YjM4ZDZ0N3k2"><i class="fab fa-instagram"></i></a></li>
									</ul>
								</div>
							</div>
						</div>

						<div class="footer-column col-xl-2 col-lg-2 col-md-6 col-sm-12">
							<div class="widget links-widget">
								<h6 class="widget-title">Quick Links</h6>
								<div class="widget-content">
									<ul class="user-links">
										<li><a href="">Home </a></li>
										<li><a href="">About</a></li>
										<li><a href="">Peojects</a></li>
										<li><a href="">Service</a></li>
										<li><a href="">Contact</a></li>
									</ul>
								</div>
							</div>
						</div>

						<div class="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12">
							<div class="widget gallery-widget">
								<h6 class="widget-title">Projects</h6>
								<div class="widget-content">
									<div class="outer">
										<figure class="image">
											<a href="index.php#"><img
													src="images/resource/project-thumb-1.jpg" alt /></a>
										</figure>
										<figure class="image">
											<a href="index.php#"><img
													src="images/resource/project-thumb-2.jpg" alt /></a>
										</figure>
										<figure class="image">
											<a href="index.php#"><img
													src="images/resource/project-thumb-3.jpg" alt /></a>
										</figure>
										<figure class="image">
											<a href="index.php#"><img
													src="images/resource/project-thumb-4.jpg" alt /></a>
										</figure>
										<figure class="image">
											<a href="index.php#"><img
													src="images/resource/project-thumb-5.jpg" alt /></a>
										</figure>
										<figure class="image">
											<a href="index.php#"><img
													src="images/resource/project-thumb-6.jpg" alt /></a>
										</figure>
									</div>
								</div>
							</div>
						</div>

						<div class="footer-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
							<div class="widget newsletter-widget">
								<h6 class="widget-title">Newsletter</h6>
								<div class="widget-content">
									<div class="text">Subscribe our newsletter to get our latest update & news</div>
									<div class="subscribe-form">
										<form method="post" action="index.php#">
											<div class="form-group">
												<input type="email" name="email" class="email" value
													placeholder="Email Address" required />
												<button type="button" class="theme-btn"><i
														class="fa fa-paper-plane"></i></button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="footer-bottom">
				<div class="auto-container">
					<div class="row">
						<div class="logo-column col-lg-4 col-md-4 order-2">
							<div class="footer-logo"><img style="width: 40px;height: 40px;" src="images/logor.png" alt />
							</div>
						</div>
						<div class="links-column col-lg-4 col-md-4 order-3">
							<ul class="footer-links">
								<li><a href="index.php#">Terms of Use</a></li>
								<li><a href="index.php#">Privacy Policy</a></li>
							</ul>
						</div>
						<div class="col-lg-4 col-md-4">
							<p class="copyright-text">© Copyright reserved by FTW</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
        </>
    )
}
export default Page13;