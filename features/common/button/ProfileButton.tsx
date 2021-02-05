import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ProfileButton = () => {
    return (
        <FontAwesomeIcon
            icon={faUser}
            color={"#333333"}
            height="16px"
            style={{ cursor: "pointer" }}
        />
    );
};

export default ProfileButton;
