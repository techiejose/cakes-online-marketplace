import React from 'react'
import './Footer.css';
function Footer() {
    return (
        <footer class=" font-small unique-color-dark footercontent mt-5">
        
        <div class="container text-center text-md-left mt-5 ">
      
         
          <div class="row  " >
      
            
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-4 socialstyle">
      
             
              <h6 class="text-uppercase font-weight-bold">Social networks</h6>
              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "80px"}}/>
              <div>
              <a class="fb-ic mx-2">
                  <i class="fab fa-facebook-f white-text mr-4 socialstyle"> </i>
                </a>
                
                <a class="tw-ic mx-2">
                  <i class="fab fa-twitter white-text mr-4 socialstyle"> </i>
                </a>
                
                <a class="gplus-ic mx-2">
                  <i class="fab fa-google-plus-g white-text mr-4 socialstyle"> </i>
                </a>
            
                <a class="li-ic mx-2">
                  <i class="fab fa-linkedin-in white-text mr-4 socialstyle"> </i>
                </a>
                
                <a class="ins-ic mx-2">
                  <i class="fab fa-instagram white-text socialstyle"> </i>
                </a>
      </div>
            </div>
            
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-4 socialstyle">
      
             
              <h6 class="text-uppercase font-weight-bold">Services</h6>
              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
              <p >
                <a href="#!" className="socialstyle">KRA Pin Register</a>
              </p>
              <p>
                <a href="#!" className="socialstyle">License Renewal</a>
              </p>
              <p>
                <a href="#!" className="socialstyle">Card Designs</a>
              </p>
              <p>
                <a href="#!" className="socialstyle">Blogging</a>
              </p>
      
            </div>
            
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
      
              
              <h6 class="text-uppercase font-weight-bold">Useful links</h6>
              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width:"60px"}}/>
              <p>
                <a href="#!"className="socialstyle">KRA</a>
              </p>
              <p>
                <a href="#!"className="socialstyle">License</a>
              </p>
              <p>
                <a href="#!"className="socialstyle">Designs</a>
              </p>
              <p>
                <a href="#!"className="socialstyle">Contact us</a>
              </p>
      
            </div>
           
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-4">
      
             
              <h6 class="text-uppercase font-weight-bold">Contact</h6>
              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
              <p>
                <i class="fas fa-home mr-3"></i> Nairobi, Kenya</p>
              <p>
                <i class="fas fa-envelope mr-3"></i> info@cyberonline.com</p>
              <p>
                <i class="fas fa-phone mr-3"></i> + 254 701 833 970</p>
              <p>
                <i class="fas fa-print mr-3"></i> + 254 735 285 909</p>
      
            </div>
            
      
          </div>
          
      
        </div>
       
        <div class="footer-copyright text-center py-3 footerx socialstyle">© 2021 Copyright:
          <a href="https://mdbootstrap.com/" className="socialstyle"> Cyberonline</a>
        </div>
        
      </footer>
    )
}

export default Footer
