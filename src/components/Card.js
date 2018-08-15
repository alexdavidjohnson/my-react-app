import React from 'React'
import './Card.css'

const Card = props => (
    <div className="Card">
        <img src='https://cl.ly/3k1F152x261C/download/wallpaper3.jpg'/>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)

export default Card