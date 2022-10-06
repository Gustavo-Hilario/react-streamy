import React from "react";
import ReactDOM from "react-dom";

// Redirect users elsewhere when they click out of the modal
import history from "../history";

const Modal = (props) => {
    // Modals are used to move React compontents/JSX to somewhere on our application. In this case, we are moving the component to be child of body so the modal could work properly

    return ReactDOM.createPortal(
        <div
            className="ui dimmer modals visible active"
            onClick={() => {
                history.push("/");
            }}
        >
            <div
                className="ui standar modal visible active"
                onClick={
                    // Fixing EVENT BUBBLING
                    (e) => e.stopPropagation()
                }
            >
                <div className="header">{props.title}</div>
                <div className="content">
                    Are you sure you want to delete this stream?
                </div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.getElementById("modal")
    );
};

export default Modal;
