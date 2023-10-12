import React, { useEffect, useState } from "react";
import twitterIcon from "../src/assets/twitter.png"
import gotLogo from "../src/assets/gotLogo.png"
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
        <div className="quote-box">
            <img src={gotLogo} className="logo"></img>
            <section className="buttons">
                <a href="https://twitter.com/intent/tweet" className="tweet-quote"><img src={twitterIcon} alt="twitter icon" /></a>
                <Button className="new-quote" onClick={handleClick}>New Quote</Button>{' '}
            </section>
            <section className="quote-container">
                <div className="text"><p>{quote}</p></div><div className="character">
                    <div className="author"><p>{author}</p></div>
                    <div className="house"><p>{house}</p></div>
                </div>
            </section>
        </div>
    )

}

export default Quotes;
