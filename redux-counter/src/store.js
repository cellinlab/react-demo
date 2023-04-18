import { createStore } from "redux";

import reducer from "./reducer";

const globalStore = createStore(reducer);

export default globalStore;
