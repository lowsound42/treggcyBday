import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './components/Landing/Landing';
import App from './components/App/App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/home" exact component={Landing} />
            <Route exact path="/" component={App} />
        </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
