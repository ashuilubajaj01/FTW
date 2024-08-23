import React from "react";

function Page11(){

    return(
        <div className="page11">
            <section class="call-to-action-two pt-0">
			<div
  className="bg bg-image pull-up"
  style={{ backgroundImage: 'url(images/background/4.png)' }}
></div>
	    		<div class="auto-container">
		    		<h2 class="title">Let’s Get Started New Project.</h2>
			    	<div class="text"></div>
				    <a href="index.html" class="theme-btn btn-style-one light-bg"><span class="btn-title">Discover more</span></a>
    			</div>
	    	</section>


    		<section id="contact" class="contact-details">
	    		<div class="container ">
		    		<div class="row">
			    		<div class="col-xl-7 col-lg-6">
				    		<div class="sec-title">
					    		<span class="sub-title">Send us email</span>
						    	<h2>Feel free to write</h2>
     						</div>

{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                            <form id="contact_form" name="contact_form" action="" method="post">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="mb-3">
                                            <input name="form_name" class="form-control" type="text" placeholder="Enter Name" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="mb-3">
                                           <input name="form_email" class="form-control required email" type="email" placeholder="Enter Email"> /</input>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                       <div class="mb-3">
                                            <input name="form_subject" class="form-control required" type="text" placeholder="Enter Subject" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="mb-3">
                                            <input name="form_phone" class="form-control" type="text" placeholder="Enter Phone" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                   <textarea name="form_message" class="form-control required" rows="7" placeholder="Enter Message"></textarea>
                                </div>
                                <div class="mb-3">
                                    <input name="form_botcheck" class="form-control" type="hidden" value="" />
                                    <button type="submit" class="theme-btn btn-style-one" data-loading-text="Please wait..."><span class="btn-title">Send message</span></button>
                                    <button type="reset" class="theme-btn btn-style-one bg-theme-color5"><span class="btn-title">Reset</span></button>
                               </div>
                            </form>


{/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
						
					    </div>
       					<div class="col-xl-5 col-lg-6">
    						<div class="contact-details__right">
	    						<div class="sec-title">
		    						<span class="sub-title">Need any help?</span>
			    					<h2>Get in touch with us</h2>
				    				<div class="text"></div>
					    		</div>
						    	<ul class="list-unstyled contact-details__info">
    								<li>
	    								<div class="icon">
		    								<span class="lnr-icon-phone-plus"></span>
			    						</div>
				    					<div class="text">
					    					<h6>Have any question?</h6>
						     				<a href="tel:9406806727"><span>Call Now</span> +91 9406806727</a>
							    		</div>
    								</li>
	    							<li>
		    							<div class="icon">
			    							<span class="lnr-icon-envelope1"></span>
				    					</div>
					    				<div class="text">
						    				<h6>Write email</h6>
							    			<a
								    			href="mailto:techkeedaa0666@gmail.com"><span>techkeedaa0666@gmail.com</span></a>
    									</div>
	    							</li>
		    						<li>
			    						<div class="icon">
				    						<span class="lnr-icon-location"></span>
					    				</div>
						    			<div class="text">
							    			<h6>Visit anytime</h6>
								    		<span>M P Nagar Zone 1 Bhopal</span>
    									</div>
	    							</li>
		    					</ul>
			    			</div>
				    	</div>
    				</div>
	    		</div>
		    </section>
        </div>
    )
}
export default Page11;