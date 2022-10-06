import React from "react";

// Get information from react store
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading ...</div>;
        }
        return (
            <div>
                <h2>{this.props.stream.title}</h2>
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

export default connect(mapStateToProps, { fetchStream })(StreamList);
