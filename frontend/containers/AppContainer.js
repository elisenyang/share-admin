import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';

import Home from '../components/Home';
import Login from '../components/Login';
import ViewPost from '../components/ViewPost';
import {BrowserRouter as Router, Route} from 'react-router-dom'

const AppContainer = ({ name }) => {
    return (
        <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/post' component={ViewPost}/>
        </div>
      </Router>
    );
};

AppContainer.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
