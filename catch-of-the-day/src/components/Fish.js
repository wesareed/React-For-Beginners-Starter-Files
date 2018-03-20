import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
    render() {
        const name = this.props.details.name;
        return (
            <li className="menu-fish">
                <img src={this.props.details.image} alt={name}/>
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(this.props.details.price)}</span>
                </h3>
                <p>{this.props.details.desc}</p>
                <button>Add to Cart</button>
            </li>
        );
    }
}

export default Fish;