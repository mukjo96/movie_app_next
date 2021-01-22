import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { firebaseClient } from "../../../firebase/firebaseClient";

const LogoutButton = () => {
    return (
        <FontAwesomeIcon
            icon={faSignOutAlt}
            color={"#444"}
            height="16px"
            style={{ cursor: "pointer" }}
            onClick={async () => {
                await firebaseClient.auth().signOut();
                window.location.href = "/";
            }}
        />
    );
};

export default LogoutButton;
