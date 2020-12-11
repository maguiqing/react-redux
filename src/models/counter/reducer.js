import { INCREMENT, DECREMENT } from "./action";
const initState = {
  count: 0,
  loading: false,
  dataSource: {
    list: [],
    pagination: {
      pageSize: 10,
      current: 1,
    },
  },
}
export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + payload };
    case DECREMENT:
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};