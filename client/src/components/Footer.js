import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { allItems, completedItems, uncompletedItems } from '../actions/itemActions';


const Footer = ({ item, allItems, completedItems, uncompletedItems }) => {
  const onAllItem = (id) => {
    allItems(id)
  };
  const onCompletedItems = (id) => {
    completedItems(id)
  };
  const onUncompletedItems = (id) => {
    uncompletedItems(id)
  };

  // const doneCount = todoData.filter((el) => el.done).length;
  //   const todoCount = todoData.length - doneCount;


  const { items } = item;
  return (
    <div>
      <Container>
        <ButtonGroup style={{ marginTop: '2rem' }}>
          <Button

            color="dark"
            style={{ marginBottom: '2rem' }}
            onClick={() => onAllItem(items._id)}
          >
            All Todos
        </Button>
          <Button

            color="dark"
            style={{ marginBottom: '2rem' }}
            onClick={() => onCompletedItems(items._id)}
          >
            Completed
        </Button>
          <Button

            color="dark"
            style={{ marginBottom: '2rem' }}
            onClick={() => onUncompletedItems(items._id)}
          >
            Undone
        </Button>
        </ButtonGroup>

      </Container>
    </div>
  )
};
const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { allItems, completedItems, uncompletedItems })(Footer);