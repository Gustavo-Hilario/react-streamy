import React from "react";

import { fetchStream } from "../../actions";
import { connect } from "react-redux";

import flv from "flv.js";

class StreamList extends React.Component {
    constructor(props) {
        super(props);

        this.videoRef = React.createRef();
    }

    componentDidMount() {
        const streamId = this.props.match.params.id;
        // console.log(streamId);
        this.props.fetchStream(streamId);
    }

    render() {
        if (!this.props.stream) {
            return (
                <div>
                    <h2>Loading …</h2>
                </div>
            );
        }

        const { title, description } = this.props.stream;

        return (
            <div>
                <video ref={this.videoRef} style={{ width: "100%" }} controls />
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id],
    };
};

export default connect(mapStateToProps, { fetchStream })(StreamList);
