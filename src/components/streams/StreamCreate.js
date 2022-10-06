import React from "react";

import { connect } from "react-redux";
import StreamForm from "./StreamForm";

import { createStream } from "../../actions";

class StreamCreate extends React.Component {
    onSubmit = (formValues) => {
        // redux-form helps making sure the code below runs and no event handling would be necessary
        // e.preventDefault();

        // console.log(formValues);
        this.props.createStream(formValues);
    };

    render() {
        // console.log(this.props);

        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(
    /*should be mapStateToProps function*/ null,
    { createStream } /*action creator*/
)(StreamCreate);
