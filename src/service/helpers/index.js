import { createStore, applyMiddleware } from "redux";
import { reducers } from "../../reducer";
import thunk from "redux-thunk";
import { apiCall } from "service/api";
import { Toast } from "service/toast";
import { composeWithDevTools } from "redux-devtools-extension";

//create Store
export const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ apiCall, Toast }))
  )
);

//history
export const history = require("history").createBrowserHistory();
