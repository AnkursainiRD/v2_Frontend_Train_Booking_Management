import "../styles/ServicesCards.css"


function ServicesCards({service}) {
    console.log(service)
  return (
    <div className="outerBox">
        <div className="innerBox">
            <img src={service?.src} alt="" />
        </div>
        <p>{service?.title}</p>
    </div>
  )
}

export default ServicesCards