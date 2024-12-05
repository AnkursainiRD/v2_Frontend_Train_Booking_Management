import flag from "../assets/flag.png"
import "../styles/BookingCard.css"

function BookingCard() {
  return (
    <div className="card">
        <div className="title">
            <h1>Welcome to <span className="flag"> <img src={flag} alt="flag" /></span> Indian Railways</h1>
        </div>
    
        <div className="wrapper">
    
            <div className="booking-container">
                <h1>Search for trains</h1>
            <div className="input-group">
                <div className="field">
                <label>From</label>
                <div className="StationInput">
                    <div className="stName">
                        <h1 className="code">YPR</h1>
                        <span className="station">Yeshwantpur Jn</span>
                    </div>
                    <button className="dropdown">&#x25BC;</button>
                </div>
                </div>
                <div className="swap">&#x21C4;</div>
                <div className="field">
                <label>To</label>
                <div className="StationInput">
                    <div className="stName">
                        <h1 className="code">SUR</h1>
                        <span className="station">Solapur Jn</span>
                    </div>
                    <button className="dropdown">&#x25BC;</button>
                </div>
                </div>
            </div>

            <div className="divider"></div>

            <div className="options-group">
                <div className="field">
                <label>Departure Date</label>
                <div className="input">
                    <span>Sun, 27 Nov</span>
                    <button className="dropdown">&#x25BC;</button>
                </div>
                </div>
                <div className="field">
                <label>Return Date</label>
                <div className="input">
                    <span>Sun, 27 Nov</span>
                    <button className="dropdown">&#x25BC;</button>
                </div>
                </div>
                <div className="field">
                <label>Quota</label>
                <div className="input">
                    <span>General</span>
                    <button className="dropdown">&#x25BC;</button>
                </div>
                </div>
                <div className="field">
                <label>className</label>
                <div className="input">
                    <span>All classNamees</span>
                    <button className="dropdown">&#x25BC;</button>
                </div>
                </div>
            </div>

            <div className="filters">
                <button className="filter-btn">Flexible with date</button>
                <button className="filter-btn active">Disability concession</button>
                <button className="filter-btn">Connecting journey</button>
            </div>

            <div className="actions">
                <label>
                <input type="checkbox"/>
                Round trip
                </label>
                <button className="search-btn">Search trains</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default BookingCard