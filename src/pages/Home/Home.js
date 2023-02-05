import "./Home.css";
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Nav from "../../components/Nav";
import imgVar from "../../assets/logo.png";

function Home() {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get("https://www.reddit.com/hot.json?limit=15");
                console.log(response.data.data.children);
                setPosts(response.data.data.children)
            } catch (e) {
                console.error(e);
            }
        }

        getData();
    }, []);


    return (
        <>
            <Nav>
                <div className="img-container">
                    <img src={imgVar} alt="logo reddit"/>
                    <h1>Reddit</h1>
                </div>
            </Nav>
            <main className="outer-container">
                <div className="inner-container-posts">
                    <h2>
                        Hottest Posts
                    </h2>
                    <h4>
                        on Reddit right now
                    </h4>
                    {Object.keys(posts).length > 0 &&
                        <div className="article-container">
                            {posts.map((onePost) => {
                                return (
                                    <article key={onePost.data.id} className="reddit-articles">
                                        <a href={onePost.data.url} className="reddit-link">
                                            <h3>
                                                {onePost.data.title}
                                            </h3>
                                        </a>
                                        <div>
                                            <p>
                                                <Link to={`/subreddit/${onePost.data.subreddit}`}
                                                      className="subreddit-link">
                                                    {onePost.data.subreddit_name_prefixed}
                                                </Link>
                                            </p>

                                            <p>
                                                Comments {onePost.data.num_comments} - Ups {onePost.data.ups}
                                            </p>
                                        </div>
                                    </article>
                                )
                            })}
                        </div>
                    }
                </div>
            </main>
        </>);
};

export default Home;