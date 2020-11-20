import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ExerciseList = () => {
  // initialise exercises (to display), loading (to render and re-render), and history to push to the edit component
  const [exercise, setExercise] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  // get all exercises and set them in their state, set loading to false so that theyre displayed
  useEffect(() => {
    axios
      .get("http://localhost:4444/api/exercises")
      .then((response) => {
        setExercise(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [loading]);

  // as long as data is not loaded a spinner will be seen
  const loadingSpinner = (
    <div className="spinner-grow text-secondary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );

  // delete exercise. value === id. it uses as everything the routing of express. setloading is set to true, so useEffect renders the page again,
  // since useEffect is called everytime loading is changing.
  const handleDelete = (e) => {
    const { value } = e.target;
    axios
      .delete("http://localhost:4444/api/exercises/" + value)
      .then(() => {
        alert("Exercise deleted");
        setLoading(true);
      })
      .catch((error) => console.log(error));
  };

  // imported the history method from react-router-dom to "push" to the localhost.../edit/ page so we can edit the exercise of interest
  const handleEdit = (id) => {
    history.push("/edit/" + id);
  };

  return (
    <div className="container">
      {loading
        ? loadingSpinner
        : exercise.map((exercise) => {
            return (
              <div key={exercise._id}>
                <h6 className="display-4">Workout</h6>
                <ul className="list-group list-group-flush">
                  <il className="list-group-item">
                    Duration: {exercise.duration}
                  </il>
                  <il className="list-group-item">
                    Heart Rate: {exercise.heartRate}
                  </il>
                  <il className="list-group-item">
                    {" "}
                    Body Temperature: {exercise.bodyTemp}
                  </il>
                  <il className="list-group-item">
                    Calories burned: {exercise.calories}
                  </il>
                  <br />
                  <div class="btn-group">
                    <button
                      className="btn btn-primary"
                      name="edit"
                      value={exercise._id}
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-secondary"
                      name="edit"
                      value={exercise._id}
                      onClick={() => handleEdit(exercise._id)}
                    >
                      Edit
                    </button>
                  </div>
                </ul>
              </div>
            );
          })}
    </div>
  );
};

export default ExerciseList;
