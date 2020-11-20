from flask import Flask, request, redirect, url_for, flash, jsonify
import numpy as np
import pickle
import json
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
PATH = os.getcwd()


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()["data"]
    prediction = (model.predict(data))
    return jsonify(prediction.tolist())


if __name__ == '__main__':
    modelfile = os.path.join(PATH, 'backend', 'python',
                             'model_predictions.pickle')
    model = pickle.load(open(modelfile, 'rb'))
    app.run(debug=True)
