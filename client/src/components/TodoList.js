
import React, { useState, useEffect } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem, toggleTodo, toggleImp } from '../actions/itemActions';


const TodoList = (props) => {
  const { getItems, deleteItem, toggleTodo, items, display, toggleImp } = props;

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
      default: {
        setTodos(items)
        break
      }

    }
  }, [display, items]);


  useEffect(() => {
    getItems();
  }, [getItems]);

  const handleDelete = (id) => {
    deleteItem(id);
  };
  const onToggleTodo = (id) => {
    toggleTodo(id);
  };
  const onToggleImp = (id) => {
    toggleImp(id);
  };


  return (

    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {todos.map(({ _id, name, completed, important }) => (
            <CSSTransition key={_id} timeout={500} >
              <ListGroupItem style={{ display: "flex", justifyContent: 'space-between' }}>
                <span onClick={() => onToggleTodo(_id)}
                  style={{ cursor: "pointer", textDecoration: completed ? 'line-through' : 'none', color: important ? 'red' : 'black', fontWeight: important ? '700' : 'normal' }}>{name}</span>
                <span>

                  <Button
                    className="remove-btn"
                    color="warning"
                    size="sm"
                    onClick={() => onToggleImp(_id)}
                  >Imp</Button>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => handleDelete(_id)}>Del</Button></span>
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

});


export default connect(mapStateToProps, { getItems, deleteItem, toggleTodo, toggleImp })(TodoList);
