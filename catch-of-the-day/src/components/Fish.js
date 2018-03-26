import React from 'react';
import { formatPrice } from '../helpers';
import { PropTypes } from 'prop-types';

class Fish extends React.Component {
    static PropTypes = {
            details: PropTypes.shape({
            image: PropTypes.string,
            name:   PropTypes.string,
            desc:   PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        addToOrder: PropTypes.func,
    }
    render() {
        const name = this.props.details.name;
        // const status = this.props.details.status;
        const isAvailable = this.props.details.status === "available";
        return (
            <li className="menu-fish">
                <img src={this.props.details.image} alt={name}/>
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(this.props.details.price)}</span>
                </h3>
                <p>{this.props.details.desc}</p>
                <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>
                    {isAvailable ? 'Add To Order' : 'Sold Out!'}
                </button>
            </li>
        );
    }
}

export default Fish;