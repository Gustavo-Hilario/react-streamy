import React from "react";

// Get information from react store
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

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
                    initialValues={
                        this.props.stream
                    } /*Special prop name from Redux Form */
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
