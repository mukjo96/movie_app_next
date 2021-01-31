import React from "react";
import { Input } from "antd";
import { useRouter } from "next/router";

const { Search } = Input;

const Searchbar = () => {
    const router = useRouter();

    const onSearch = (value: string) => {
        router.push(`/search?text=${value}`);
    };

    return (
        <Search
            style={{
                width: "240px",
                padding: "3px 0 3px 0",
                marginLeft: "5px",
            }}
            placeholder="Search Movie"
            onSearch={onSearch}
            enterButton
            size="small"
        />
    );
};

export default Searchbar;
