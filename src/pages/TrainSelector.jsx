import React from "react";
import "../styles/TrainSelector.css";

const TrainSelector = () => {
  // Sample data for trains
  const trains = [
    {
      name: "SUR Express",
      number: "134556",
      departure: "19:20",
      arrival: "05:52",
      bordingStation:"Solapur Jn",
      destinationStation:"Solapur Jn",
      duration: "10 hr 38 min",
      date: "Tue, 05 Feb",
      classes: [
        { type: "SL", status: "Waiting List", seats: "34 Seats in WL", color: "red" },
        { type: "3A", status: "Available", seats: "9 Seats", color: "green" },
        { type: "2A", status: "Available", seats: "21 Seats", color: "green" },
        { type: "1A", status: "Available", seats: "9 Seats", color: "green" },
      ],
    },
    {
      name: "SUR Express",
      number: "134556",
      departure: "19:20",
      arrival: "05:52",
      duration: "10 hr 38 min",
      bordingStation:"Solapur Jn",
      destinationStation:"Solapur Jn",
      date: "Tue, 05 Feb",
      classes: [
        { type: "SL", status: "Waiting List", seats: "34 Seats in WL", color: "red" },
        { type: "3A", status: "Available", seats: "9 Seats", color: "green" },
        { type: "2A", status: "Available", seats: "21 Seats", color: "green" },
        { type: "1A", status: "Available", seats: "9 Seats", color: "green" },
      ],
    },
  ];

  return (
    <div className="train-selector">
      {/* Header */}
      <div className="header">
        <h2>Select Train</h2>
        <div className="route">
          <span>YPR (Yeshwantpur Jn)</span>
          <span className="route-arrow">→</span>
          <span>SUR (Solapur Jn)</span>
        </div>
        <div className="date">Mon, 05 Feb</div>
      </div>

      {/* Filters */}
      <div className="filters">
        <button>Available</button>
        <button>Quota</button>
        <button>Sort</button>
      </div>

      {/* Train Cards */}
      <div className="train-cards">
        {trains.map((train, index) => (
          <div className="train-card" key={index}>
            <h3>
                {train.name} ({train.number})
              </h3>
            <div className="train-info">
            
              <div className="left">
                <p> {train.arrival} </p>
                <p> {train.bordingStation} </p>
                <p> {train.date} </p>
              </div>
              
              <div className="mid"> 
                <p>{train.duration}</p>
              </div>

              <div className="right">
                <p>
                  <p> {train.departure} </p>
                  <p> {train.bordingStation} </p>
                  <p> {train.date} </p>
                </p>
              </div>
             
            </div>
            <div className="seat-info">
              {train.classes.map((cls, clsIndex) => (
                <div
                  key={clsIndex}
                  className="seat"
                  style={{ borderColor: cls.color }}
                >
                 <div className="seat-box">
                    <p>{cls.type}</p>
                    <p style={{ color: cls.color }}>{cls.status}</p>
                 </div>
                  <p>{cls.seats}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="fare">
          <p>Total Fare:</p>
          <h3>₹1450.5</h3>
        </div>
        <button className="proceed-button">Proceed to Book</button>
      </div>
    </div>
  );
};

export default TrainSelector;
