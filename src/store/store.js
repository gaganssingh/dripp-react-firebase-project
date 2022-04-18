// import { compose, createStore, applyMiddleware } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
// import { rootReducer } from "./root-reducer";

// // store in localstorage
// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"],
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middlewares = [
//   process.env.NODE_ENV !== "production" && logger,
//   thunk,
// ].filter(
//   // Only passthrough truthy values
//   Boolean
// );

// // Enable Redux DevTools browser extension
// const composedEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;
// const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// export const persistor = persistStore(store);

import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
