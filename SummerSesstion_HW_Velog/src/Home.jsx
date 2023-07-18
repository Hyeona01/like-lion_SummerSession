import React from "react";
import Sub from "./components/Sub";
import Post from "./components/Post";
import { Wrapper } from "./App";

const Home = () => {
    return(
        <>
            <Sub />
            <Wrapper>
                <Post />
            </Wrapper>
        </>
    )
}

export default Home;