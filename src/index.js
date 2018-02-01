import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PostsIndex from './components/post_index';
import PostsNew from './components/posts_new';

import reducers from './reducers';
import reduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
 

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Switch>
        <Route path="/posts/new" component={PostsNew}/>
        <Route path="/" component={PostsIndex}/>
      </Switch>
     
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
