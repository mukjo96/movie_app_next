import MovieInfo from "@features/movieInfo/page/MovieInfo";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const MovieInfoPage = () => {
    const router = useRouter();
    const [id, setId] = useState<string | string[]>();

    useEffect(() => {
        const { movieid } = router.query;
        setId(movieid);
    }, [id]);

    console.log("id", id);
    if (!id) {
        return <div>error</div>;
    } else {
        return (
            <div>
                <MovieInfo id={id} />
            </div>
        );
    }
};

export default MovieInfoPage;
