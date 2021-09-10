import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./rootEpic";
import { rootReducer } from "./rootReducer";

const epicMiddleware = createEpicMiddleware();
const middleware = [epicMiddleware];

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware), compose)
);

epicMiddleware.run(rootEpic);
