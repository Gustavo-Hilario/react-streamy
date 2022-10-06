import React from "react";

import Modal from "../Modal";

const StreamDelete = () => {
    const actions = () => {
        return (
            <div>
                <button className="ui button primary">Delete</button>
                <button className="ui button">Cancel</button>
            </div>
        );
    };

    return (
        <div>
            <h2>StreamDelete</h2>
            <Modal
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                actions={actions()}
            />
        </div>
    );
};

export default StreamDelete;
