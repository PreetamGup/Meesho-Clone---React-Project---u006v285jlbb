import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <div className='footerContainer'>
        <div className='container1'>
            <div className='downloadContainer'>
                <h2>Shop Non-Stop on Meesho</h2>
                <p>
                    Trusted by more than 1 Crore Indians <br />
                    Cash on Delivery | Free Delivery
                </p>

                <div className='downloadImg'>
                    <img src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp" alt="Play store" />
                    <img src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp" alt="App store" />
                </div>
            </div>

            <div className="containerLink">
                <span>Careers</span>
                <span>Become a supplier</span>
                <span>Hall of Fame</span>
                <span>Sitemap</span>
            </div>

            <div className="containerLink">
                <span>Legal and Polices</span>
                <span>Meesho Tech Blogs</span>
                <span>Notice and Returns</span>
            </div>

            <div className='socialLink'>
                <h2>React out to us</h2>
                <div className='imgContainer'>
                
                    <img src="..\..\..\public\utilities\facebook.png" alt="facebook" />
                    <img src="..\..\..\public\utilities\instagram.png" alt="instagram" />
                    <img src="..\..\..\public\utilities\youtube.png" alt="youtube" />
                    <img src="..\..\..\public\utilities\linkedin.png" alt="linkedin" />
                    <img src="..\..\..\public\utilities\twitter.png" alt="twitter" />

                </div>
                
            </div>

            <div className='contactUs'>
                <h2>Contact Us</h2>
                <div>
                Fashnear Technologies Private Limited, 
                CIN: U74900KA2015PTC082263
                06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India 
                E-mail address: query@meesho.com
                © 2015-2023 Meesho.com
                </div>
            </div>
        </div>

        <select name="moreAboutMeesho" id="moreMesso" >
            <option selected value="More About Meesho">More About Meesho</option>
        </select>
    </div>
  )
}

export default footer