import axios from 'axios';
import { TOGGLE_TODO, GET_ITEMS, ITEMS_LOADING, DELETE_ITEM, ADD_ITEM, ALL_ITEMS, COMPLETED_ITEMS, UNCOMPLETED_ITEMS, TOGGLE_IMP } from './types';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('/api/items')
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
};

export const addItem = item => dispatch => {
  axios
    .post('/api/items', item)
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
};

export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  )
};


export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};

export const allItems = id => ({
  type: ALL_ITEMS,
  payload: id
});

export const completedItems = id => ({
  type: COMPLETED_ITEMS,
  payload: id
});


export const uncompletedItems = id => ({
  type: UNCOMPLETED_ITEMS,
  payload: id
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id
});
export const toggleImp = id => ({
  type: TOGGLE_IMP,
  payload: id
});
