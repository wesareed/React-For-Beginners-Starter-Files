import React from 'react'; 
import { formatPrice } from '../helpers';

class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store &rarr;</button>
            </form> 
        ) 
    }
}

export default StorePicker; 