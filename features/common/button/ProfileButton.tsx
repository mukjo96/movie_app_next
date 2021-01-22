import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ProfileButton = () => {
    return (
        <Link href="/login">
            <FontAwesomeIcon
                icon={faUser}
                color={"#444"}
                height="16px"
                style={{ cursor: "pointer" }}
            />
        </Link>
    );
};

export default ProfileButton;
