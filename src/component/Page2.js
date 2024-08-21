import React from "react";

function Page2(){

    return(
        <>
            <div className="page2">
                <section id="home" class="banner-section">
			        <div class="banner-carousel owl-carousel owl-theme default-navs">

				        <div class="slide-item">
					         {/* <div class="bg-image" style="background-image: url(images/main-slider/2.jpg);"></div>  */}
					        <div class="auto-container">
						        <div class="content-box">
							        <h1 style="font-size: 50px;" class="title animate-1"> "Changing <br />Imagination into Reality"</h1>
							        <div class="text animate-2">"We will with you, From the start to end"</div>
							        <div class="btn-box animate-3">
								        <a href="#" class="theme-btn btn-style-one hover-light"><span class="btn-title">Learn more</span></a>
							        </div>
						        </div>
					       </div>
				        </div>

				        <div class="slide-item">
					        <div class="bg-image" style="background-image: url(images/main-slider/3.jpg);"></div>
					            <div class="auto-container">
						            <div class="content-box">
							            <h1 style="font-size: 50px;" class="title animate-1">"Web Development <br /> that Elevates
								        Your Brand"</h1>
							        <div class="text animate-2">You have better things to do than worry about your business
							        </div>
							        <div class="btn-box animate-3">
								        <a href="#" class="theme-btn btn-style-one hover-light"><span class="btn-title">Discover
										    more</span></a>
							        </div>
						        </div>
					        </div>
				        </div>
			        </div>
		        </section>
            </div>
        </>
    )
}
export default Page2