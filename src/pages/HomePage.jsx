import "../styles/HomePage.css"
import grid from "../assets/grid.png"
import BookingCard from "../components/BookingCard"
import ServicesCards from "../components/ServicesCards"
import {servcies} from "../data/servicesData.js"
import Slider from "../components/Slider.jsx"
import tourPackage from "../data/packageData.js"
import PackageCard from "../components/PackageCard.jsx"
import Footer from "../components/Footer.jsx"


function HomePage() {
  return (
    <div className="home">
        <div className="hero1">
          <h1>This is testing</h1>
            {/* <img src={Img1} alt="" /> */}
            <div className="slider-component">
            <Slider/>
            </div>
            {/* <div className="grd">
                <img src={gradient} alt="" />
            </div> */}
        </div>

        <div className="hero2">
            <img src={grid} alt="" />
           
        </div>
        <div className="bookingCard-component">
                <BookingCard/>
           </div>
      

        <div className="hero3">
            <div className="service-tagline">
              <h2>Our Other Populer Services</h2>
            </div>
            <div className="service-card">
                {
                  servcies&& servcies.map((service)=>{
                    return  <ServicesCards key={service.id} service={service}/>
                  })
                }
            </div>
        </div>

        <div className="hero4">
          <div className="helpLine-image"></div>
          <div className="helpline-heading">
                <h3>Have a question or need <br /> assistance? We are here to help.</h3>
                <button>Call 139</button>
          </div>
        </div>

        <div className="hero5">
            <div className="package-tagline">
               <h2>Plan Your Next Holiday</h2>
            </div>
            <div className="package-card">
                {
                  tourPackage&& tourPackage.map((tourCard)=>{
                    return <PackageCard key={tourCard.id} tourCard={tourCard}/>
                  })
                }
            </div>
        </div>

        <footer>
                <Footer/>
        </footer>
    </div>
  )
}

export default HomePage