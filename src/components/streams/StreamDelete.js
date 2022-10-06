import React from "react";

import Modal from "../Modal";

// Redirect users elsewhere when they click out of the modal
import history from "../../history";

const StreamDelete = () => {
    const actions = () => {
        return (
            // React.Fragment is helpfull when we do not want to have that extra div as parent element
            <React.Fragment>
                <button className="ui button primary">Delete</button>
                <button className="ui button">Cancel</button>
            </React.Fragment>

            // Another syntax but the above is preferrable

            // <>
            // </>
        );
    };

    return (
        <div>
            <h2>StreamDelete</h2>
            <Modal
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                actions={actions()}
                onDismiss={() => {
                    history.push("/");
                }}
            />
        </div>
    );
};

export default StreamDelete;
