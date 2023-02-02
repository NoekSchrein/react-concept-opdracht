import "./Subreddit.css";
import React, {useEffect, useState} from 'react';
import Nav from "../../components/Nav";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {ReactComponent as BackIcon} from "../../assets/back.svg"


function Subreddit() {
    const [subreddit, setSubreddit] = useState({});
    const {id} = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://www.reddit.com/r/${id}/about.json`)
                console.log(response);
                setSubreddit(response.data.data);
            } catch (e) {
                console.error(e);
            }
        }

        if (id) {
            fetchData()
        }
        ;
    }, [id]);

    return (
        <div>
            <Nav>
                <div className="img-container">
                    <h1>r/{id}</h1>
                    <h4>Subreddit specifications</h4>
                </div>

            </Nav>

            <main className="outer-container">
                <div className="inner-content-container">
                    {Object.keys(subreddit).length > 0 && (
                        <div className="subreddit-specification-details">
                            <h3>Title</h3>
                            <p>{subreddit.title}</p>
                            <h3>Description</h3>
                            <p>{subreddit.public_description}</p>
                            <h3>Number of subscribers</h3>
                            <p>{subreddit.subscribers}</p>
                            <span className="back-link-wrapper">
                                <BackIcon className="back-icon"/>
                                <Link to="/">Take me back</Link>
                            </span>
                        </div>
                    )}
                </div>
            </main>

        </div>
    );
}

export default Subreddit;