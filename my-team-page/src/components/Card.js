import { Component } from 'react'

class Card extends Component {
    render() {
        const card  = this.props
        return (
            <div>
                <img src={card.img} alt={card.name} />
                <span> {card.job} </span>
                <h3>{card.name}</h3>
            </div>
        )
    }
}

export default Card;