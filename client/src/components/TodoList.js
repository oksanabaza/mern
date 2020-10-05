
import React, { useState, useEffect } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem, toggleTodo } from '../actions/itemActions';


const TodoList = (props) => {
  const { getItems, deleteItem, toggleTodo, items, display, loading } = props;

  const [todos, setTodos] = useState(items);


  useEffect(() => {
    switch (display) {
      case "all": {
        setTodos(items)
        break
      }
      case "completed": {
        setTodos(items.filter(item => item.completed))
        break
      }
      case "uncompleted": {
        setTodos(items.filter(item => !item.completed))
        break
      }

    }
  }, [display, items]);

  console.log(items)
  useEffect(() => {
    getItems();
  }, []);

  const handleDelete = (id) => {
    deleteItem(id);
  };
  const onToggleTodo = (id) => {
    toggleTodo(id);
  };



  return (

    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {todos.map(({ _id, name, completed }) => (
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
  items: state.item.items,
  display: state.item.display,
  loading: state.item.loading
});


export default connect(mapStateToProps, { getItems, deleteItem, toggleTodo })(TodoList);
