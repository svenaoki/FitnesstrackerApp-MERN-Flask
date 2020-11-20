import pickle
import json
import os
import pandas as pd
import pymongo
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score

client = MongoClient(
    'mongodb+srv://newUser:newUser@cluster0.ruugs.mongodb.net/Tracker?retryWrites=true&w=majority')

try:
    collection = client.Tracker.Exercises
except ConnectionFailure as error:
    print("No host found: ", error)

PATH = os.getcwd()
y = pd.read_csv(os.path.join(PATH, "python", "calories.csv"))
X = pd.read_csv(os.path.join(PATH, "python", "exercise.csv"))

X = X.filter(["Duration", "Heart_Rate", "Body_Temp"])
X = X.rename(columns={"Duration": "duration",
                      "Heart_Rate": "heartRate", "Body_Temp": "bodyTemp"})
y = y["Calories"]

df = pd.concat([X, y], axis=1)

# Write Data into mongo from pd
collection.insert_many(df.to_dict('records'))

# Read Data from mongo into pd
df = pd.DataFrame(list(collection.find()))
df.set_index("_id", inplace=True)


lr = LinearRegression()
model = lr.fit(X, y)
print(r2_score(y, model.predict(X)))

pickle.dump(lr, open('model_predictions.pickle', 'wb'))

# close connection
client.close()
