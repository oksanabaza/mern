
import React, { useEffect } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem, toggleTodo } from '../actions/itemActions';


const TodoList = ({ getItems, item, deleteItem, toggleTodo }) => {


  useEffect(() => {
    getItems();
  }, [getItems]);

  const handleDelete = (id) => {
    deleteItem(id);
  };
  const onToggleTodo = (id) => {
    toggleTodo(id);
  };


  const { items } = item;
  return (

    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ _id, name, completed }) => (
            <CSSTransition key={_id} timeout={500} >
              <ListGroupItem style={{ display: "flex", justifyContent: 'space-between' }}>
                <span onClick={() => onToggleTodo(_id)}
                  style={{ cursor: "pointer", textDecoration: completed ? 'line-through' : 'none' }}>{name}</span>
                <span>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => handleDelete(_id)}>X</Button></span>
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>

    </Container>

  );
};

const mapStateToProps = (state) => ({
  item: state.item,
});


export default connect(mapStateToProps, { getItems, deleteItem, toggleTodo })(TodoList);
