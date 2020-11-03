import React, { useState } from "react";
import axios from "axios";

const CaloriesPredict = () => {
  const [duration, setDuration] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [bodyTemp, setBodyTemp] = useState("");
  const [prediction, setPrediction] = useState(0);

  // this calls the flask application running on port 5000. It takes three inputs and response with the prediciton
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/predict", {
        data: [[Number(duration), Number(heartRate), Number(bodyTemp)]],
      })
      .then((response) => setPrediction(response["data"]))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form>
        <div className="form-group">
          Duration
          <input
            className="form-control"
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="form-group">
          Heart Rate
          <input
            className="form-control"
            type="text"
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
          />
        </div>
        <div className="form-group">
          Body Temperature
          <input
            className="form-control"
            type="text"
            value={bodyTemp}
            onChange={(e) => setBodyTemp(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Predict
        </button>
        <hr />
        Prediction:
        <input
          className="form-control"
          type="text"
          value={prediction}
          onChange={(e) => console.log(e)}
        />
      </form>
    </div>
  );
};

export default CaloriesPredict;
