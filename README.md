# The MERN Stack for a fitness tracker app and a predictive component

## What this repo is about?

This repo is used to create a MERN stack app.
MERN stands for mongoDB, Express, React and NodeJS.
It is one of the more popular stacks in web application development and even though I am a data scientist and thus not an expert in front-end development and/or JavaScript, I really enjoyed it.

There are a few requirements that you need to fullfill to run the repo on your local machine.

1. Create a mongoDB account
2. Change the mongoDB URL in the .env file of your backend folder to point to your database
3. Load data into the mongoDB database using the mongoConnection.py in the python folder
4. Know a little bit about the frameworks

```
├── backend/
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   ├── models/
│   │   └── Exercises.js
│   ├── python/
│   │   ├── app.py
│   │   ├── mongoConnection.py
│   │   └── exercise.csv
│   └── routes/
│       └── ExerciseRoutes.js
└── frontend/
    ├── package.json
    ├── package-lock.json
    ├── src/
    │   ├── App.css
    │   ├── App.js
    │   ├── index.js
    │   └── components/
    │       ├── create-exercise.js
    │       ├── edit-exercise.js
    │       ├── list-exercise.js
    │       └── predict-calories.js
    └── public/
        ├── index.html
        ├── ...
        └── manifest.json
```

In the backend folder are the scripts used for express and python.
The Express server is running on http://localhost:4444 and once a connection is established you may send a HTTP GET request to http://localhost:4444/api/exercises to print some exercises.
In the python folder I just run a very simple linear regression model that predicts calories based on heart rate, duration and body temperature. Flask created therefore an API endpoint at port 5000.

In the frontend folder is the ReactJS app with four components:

1. List Exercises
2. Edit Exercise
3. Create Exercise
4. Delete Exercise

All these components are accessible in the application itself.

Click on "Choose file" and upload your cat or dog image

<img src = "/docs/FrontEndtool.png">

Click on "Run CNN" to request probabilities on whether it is a dog or a cat

<img src = "/docs/FrontEndtool2.png">

## Takeaways

PyTorch has a steeper learning curve than for example Keras but it becomes more intuitiv after a while. Additonally, with PyTorch Lightning being launched users will get a similar experience as compared to Keras. If you therefore compare PyTorch with Tensorflow, PyTorch is winning in my opinion. It is just more pythonic.
Furthermore, debugging is a delight especially when you create your own neural network from scratch.
If there is one minus point, it is that PyTorch is rigorous about the data type (float, int, long...) but so is Tensorflow.
