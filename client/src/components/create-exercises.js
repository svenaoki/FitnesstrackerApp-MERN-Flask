import axios from "axios";
import React, { useState } from "react";

const ExerciseCreate = () => {
  const [duration, setDuration] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [bodyTemp, setBodyTemp] = useState("");
  const [calories, setCalories] = useState("");

  const changeDuration = (e) => setDuration(e.target.value);
  const changeHeartRate = (e) => setHeartRate(e.target.value);
  const changeBodyTemp = (e) => setBodyTemp(e.target.value);
  const changeCalories = (e) => setCalories(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4444/api/exercises/add", {
        duration,
        heartRate,
        bodyTemp,
        calories,
      })
      .then(() => alert("Exercise added!"))
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
            onChange={changeDuration}
          />
        </div>
        <div className="form-group">
          <label>Heart Rate</label>
          <input
            className="form-control"
            type="text"
            name="heartRate"
            value={heartRate}
            onChange={changeHeartRate}
          />
        </div>
        <div className="form-group">
          <label>Body Temperature</label>
          <input
            className="form-control"
            type="text"
            name="bodyTemp"
            value={bodyTemp}
            onChange={changeBodyTemp}
          />
        </div>
        <div className="form-group">
          <label>Calories burned</label>
          <input
            className="form-control"
            type="text"
            name="calories"
            value={calories}
            onChange={changeCalories}
          />
          <br />
          <button className="btn btn-primary btn-lg" onClick={onSubmit}>
            Create Exercise
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExerciseCreate;
