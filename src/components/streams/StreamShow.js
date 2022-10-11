import React from "react";

import { fetchStream } from "../../actions";
import { connect } from "react-redux";

class StreamList extends React.Component {
    componentDidMount() {
        const streamId = this.props.match.params.id;
        // console.log(streamId);
        this.props.fetchStream(streamId);
    }

    render() {
        return (
            <div>
                <h2>StreamShow</h2>
            </div>
        );
    }
}

export default connect(null, { fetchStream })(StreamList);
