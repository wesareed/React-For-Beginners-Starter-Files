import React from 'react'; 
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    goToStore(event) {
        // 1. Stop form from submitting
        event.preventDefault();
        // 2. Get the text from the input
        // 3. Change the page to /store/whatever-they-entered
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input 
                    type="text" 
                    required 
                    placeholder="Store Name" 
                    defaultValue={getFunName()} 
                />

                <button type="submit">Visit Store &rarr;</button>
            </form> 
        ) 
    }
}

export default StorePicker; 