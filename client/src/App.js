import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import TodoList from './components/TodoList';
import ItemModal from './components/ItemModal';
import Footer from './components/Footer';

// import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <ItemModal />
          <TodoList />
          <Footer />
        </div>
      </Provider>
    );
  }

}

export default App;
