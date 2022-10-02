import React from "react";

import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
    componentDidMount() {
        // Google Client Authentication
        window.gapi.load("client:auth2", () => {
            window.gapi.client
                .init({
                    clientId:
                        "253405588288-v3bk5emgtlr1prpte36q6dssogi6jhr1.apps.googleusercontent.com",
                    scope: "email",
                    plugin_name: "streamy",
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get());

                    // If we pass a callback function to listen, it will be invoked any time the user's authentication status
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <div>
                    <button
                        className="ui red google button"
                        onClick={this.onSignOutClick}
                    >
                        <i className="google icon"></i>
                        Sign Out
                    </button>
                </div>
            );
        } else {
            return (
                <div>
                    <button
                        className="ui red google button"
                        onClick={this.onSignInClick}
                    >
                        <i className="google icon"></i>
                        Sign In with Google
                    </button>
                </div>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
