import React from "react";

// Get information from react store
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

import _ from "lodash";

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        console.log(formValues);
    };

    render() {
        if (!this.props.stream) {
            return <div>Loading ...</div>;
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    // We can use Lodash to help picking specific values inside the Stream object
                    initialValues={_.pick(
                        this.props.stream,
                        "title",
                        "description"
                    )} /*Special prop name from Redux Form */
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (
    state,
    ownProps /*Props from this specific component */
) => {
    return {
        stream: state.streams[ownProps.match.params.id],
    };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
    StreamEdit
);
