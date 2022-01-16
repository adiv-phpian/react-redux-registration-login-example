import React, { Fragment } from 'react';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';

import { Header } from '../_layouts';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import CustomRoutes from '../_components/CustomRoutes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (

            <Router location={history.location} navigator={history}>
                <Fragment>
                    <div className="">

                        <Header />
                        <ToastContainer />

                        <div className="container">
                            <div className="flex justify-center items-center ">
                                {CustomRoutes}
                            </div>
                        </div>
                    </div>
                </Fragment>
            </Router>

        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };