import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { fetchData } from './fetchingQts.jsx'
import { createStore, combineReducers } from 'redux';
import { changeTxt, changeColor } from './reducers/changeclrTXT.js';
import { Provider, connect } from 'react-redux';
import { txtActn, colorActn } from './reducers/changeclrTXT.js'
import { colors } from './colors.js'


const rootReducer = combineReducers({
  txt: changeTxt,
  color: changeColor
});

 const store = createStore(rootReducer);



const mapStateToProps = state => ({
  txt: state.txt,
  color: state.color,
});

const mapDispatchToProps = dispatch => ({
  changeTxt: () => dispatch(txtActn()),
  changeColor: () => dispatch(colorActn()),
});

 connect(mapStateToProps, mapDispatchToProps)(App);




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
      <App  />
    </React.StrictMode>
    </Provider>
)

