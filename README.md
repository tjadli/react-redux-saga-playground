This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Development process

Here I created a basic React + Redux application about twitter Api. It's defenetely not ideal,and this is the first iteration, the next iteration will handle data mutability (immerJS),adding more tests for the redux store (Actions/Reducers..) and real time updates using REST Polling

##### Note

This project was ejected in order to be able to modify webpack configuration, in the goal of adding alias for relative path

##### Mock Api

in order to mock the twitter Api, I used [json-server](https://github.com/typicode/json-server).
the `db.json` file is included in the project in the root directory

to start the json-server please use the command :

```
json-server --watch db.json
```
