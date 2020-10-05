import { GET_ITEMS, ITEMS_LOADING, DELETE_ITEM, ADD_ITEM, TOGGLE_TODO, ALL_ITEMS, COMPLETED_ITEMS, UNCOMPLETED_ITEMS } from '../actions/types';

const initialState = {
  items: [],
  loading: false,

};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,

      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      }
    case TOGGLE_TODO:
      return {
        items: state.items.map(item => (item._id === action.payload) ? {
          ...item, completed: !item.completed
        } : item)
      };
    case ALL_ITEMS:
      return {
        ...state,
        items: state.items.filter(item => item)
      }
    case COMPLETED_ITEMS:
      return {
        ...state,
        items: state.items.filter(item => item.completed)
      };
    case UNCOMPLETED_ITEMS:
      return {
        ...state,
        items: state.items.filter(item => !item.completed)
      };
    default:
      return state;
  }
}
