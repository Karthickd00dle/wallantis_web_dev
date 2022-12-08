import { sampleStateList } from "service/actionType";

const initialState = {
  sampleState: [],
};
const commonReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case sampleStateList.sample1:
      return {
        ...state,
        sampleState: payload,
      };

    default:
      return state;
  }
};

export default commonReducer;
