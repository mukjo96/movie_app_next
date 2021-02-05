import React from "react";
import { Input } from "antd";
import { useRouter } from "next/router";
import styled from "styled-components";

const { Search } = Input;

const Searchbar = () => {
    const router = useRouter();

    const onSearch = (value: string) => {
        router.push(`/search?text=${value}`);
    };

    return (
        <StyledSearchbar
            placeholder="Search Movie"
            onSearch={onSearch}
            enterButton
            size="small"
        />
    );
};

export default Searchbar;

const StyledSearchbar = styled(Search)`
    width: 240px;
    padding: 3px 0 3px 0;
    margin-left: 5px;

    .ant-input-group-addon {
        button {
            background-color: #333333;
            border-color: #333333;
        }
    }
`;
