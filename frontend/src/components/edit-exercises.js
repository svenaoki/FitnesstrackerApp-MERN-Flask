import React, { useState, useEffect } from "react";
import axios from "axios";

const ExerciseEdit = (props) => {
  const [duration, setDuration] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [bodyTemp, setBodyTemp] = useState("");
  const [calories, setCalories] = useState("");

  // first insert the old values by http get
  useEffect(() => {
    axios
      .get("http://localhost:4444/api/exercises/" + props.match.params.id)
      .then((response) => {
        setDuration(response.data.duration);
        setHeartRate(response.data.heartRate);
        setBodyTemp(response.data.bodyTemp);
        setCalories(response.data.calories);
      })
      .catch((error) => console.log(error));
  }, []);

  // update the exercise of interest
  const handleEdit = (e) => {
    e.preventDefault();
    console.log(duration);
    axios
      .put("http://localhost:4444/api/exercises/" + props.match.params.id, {
        duration,
        heartRate,
        bodyTemp,
        calories,
      })
      .then(() => alert("Exercise updated!"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label>Duration</label>
          <input
            className="form-control"
            type="text"
            name="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Heart Rate</label>
          <input
            className="form-control"
            type="text"
            name="heartRate"
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Body Temperature</label>
          <input
            className="form-control"
            type="text"
            name="bodyTemp"
            value={bodyTemp}
            onChange={(e) => setBodyTemp(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Calories burned</label>
          <input
            className="form-control"
            type="text"
            name="calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
          <br />
          <button
            className="btn btn-primary btn-lg"
            onClick={(e) => handleEdit(e)}
          >
            Edit Exercise
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExerciseEdit;
