import React, { useEffect, useState } from "react";
import twitterIcon from "../src/twitter.png"
import gotLogo from "../src/gotLogo.jpg"
import Button from 'react-bootstrap/Button';

const Quotes = () => {
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')
    const [house, setHouse] = useState('')

    useEffect(() => {
        getQuote()
    }, [])

    const getQuote = () => {
        let url = "https://api.gameofthronesquotes.xyz/v1/random/5";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let dataQuotes = data;
                let randomNum = Math.floor(Math.random() * data.length);
                let randomQuote = dataQuotes[randomNum];
                setQuote(randomQuote.sentence);
                setAuthor(randomQuote.character.name)
                setHouse(randomQuote.character.house.name)
            })
    }

    const handleClick = () => {
        getQuote()
    }
    return (
            <div id="quote-box">
                <img src={gotLogo} id="logo"></img>
                <div id="text"><p>{quote}</p></div>
                <div id="author"><p>{author}</p></div>
                <div id="house"><p>{house}</p></div>
                <div id="buttons">
                    <a href="https://twitter.com/intent/tweet" id="tweet-quote"><span><img src={twitterIcon} alt="twitter icon" /></span></a>
                    <button id="new-quote" onClick={handleClick}>New Quote</button>{' '}
                </div>
            </div>
                )

}

export default Quotes;
