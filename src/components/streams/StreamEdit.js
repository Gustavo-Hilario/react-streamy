import React from "react";

// Get information from react store
import { connect } from "react-redux";

const StreamList = (props) => {
    console.log(props);
    return (
        <div>
            <h2>StreamEdit</h2>
        </div>
    );
};

const mapStateToProps = (
    state,
    ownProps /*Props from this specific component */
) => {
    console.log(ownProps);
    return {
        stream: state.streams[ownProps.match.params.id],
    };
};

export default connect(mapStateToProps, {})(StreamList);
