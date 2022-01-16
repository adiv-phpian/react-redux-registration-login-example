import React from 'react';

class NoMatch extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="col-md-6 col-md-offset-3 ">
                Page you are looking for is not found.
            </div>
        );
    }
}

export default NoMatch;