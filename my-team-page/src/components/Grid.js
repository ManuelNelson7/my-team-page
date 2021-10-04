import { Component } from 'react'
import Card from './Card'

class Grid extends Component {
    render() {
        const grid = this.props
        return (
            <div>
                {grid.map(card => 
                    <Card
                        name={card.name}
                        key={card.name}
                        job={card.job}
                        img={card.img}
                />)}



            </div>
        )
    }
}

export default Grid;