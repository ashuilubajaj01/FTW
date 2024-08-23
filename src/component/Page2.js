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
								<h1
  className="title animate-1"
  style={{ fontSize: '50px' }}
>
  "Changing <br />Imagination into Reality"
</h1>
							        <div class="text animate-2">"We will with you, From the start to end"</div>
							        <div class="btn-box animate-3">
								        <a href="inde.html" class="theme-btn btn-style-one hover-light"><span class="btn-title">Learn more</span></a>
							        </div>
						        </div>
					       </div>
				        </div>

				        <div class="slide-item">
						<div
  className="bg-image"
  style={{ backgroundImage: 'url(images/main-slider/3.jpg)' }}
></div>
					            <div class="auto-container">
						            <div class="content-box">
									<h1
  className="title animate-1"
  style={{ fontSize: '50px' }}
>
  Web Development <br /> that Elevates Your Brand
</h1>
							        <div class="text animate-2">You have better things to do than worry about your business
							        </div>
							        <div class="btn-box animate-3">
								        <a href="index.html" class="theme-btn btn-style-one hover-light"><span class="btn-title">Discover
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