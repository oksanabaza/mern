import { GET_ITEMS, ITEMS_LOADING, DELETE_ITEM, ADD_ITEM, TOGGLE_TODO, ALL_ITEMS, COMPLETED_ITEMS, UNCOMPLETED_ITEMS, TOGGLE_IMP } from '../actions/types';

const initialState = {
  items: [],
  loading: false,
  display: "all"
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
        ...state,
        items: state.items.map(item => (item._id === action.payload) ? {
          ...item, completed: !item.completed
        } : item),

      };
    case TOGGLE_IMP:
      return {
        ...state,
        items: state.items.map(item => (item._id === action.payload) ? {
          ...item, important: !item.important
        } : item),
      };
    // case TOGGLE_IMP:
    //   return {
    //     ...state,
    //     items: state.items.map((item) =>
    //       item._id === action.payload._id ? action.payload : item
    //     ),
    //     errors: null,
    //   };

    case ALL_ITEMS:
      return {
        ...state,
        display: "all"
      }
    case COMPLETED_ITEMS:
      return {
        ...state,
        display: "completed"
      }
    case UNCOMPLETED_ITEMS:
      return {
        ...state,
        display: "uncompleted"
      };
    default:
      return state;
  }
}
