import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./rootEpic";
import { rootReducer } from "./rootReducer";

const epicMiddleware = createEpicMiddleware();
const middlwares = [epicMiddleware];

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlwares), compose)
);

epicMiddleware.run(rootEpic);
