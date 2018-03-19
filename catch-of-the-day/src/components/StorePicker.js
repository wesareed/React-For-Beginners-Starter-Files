import React from 'react'; 
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    // Use this constructor funtction to bind nested methods or use arrow syntax
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);     
    // }

    myInput = React.createRef(); 

    goToStore = (event) => {
        // 1. Stop form from submitting
        event.preventDefault();
        // 2. Get the text from the input
        const storeName = this.myInput.value.value;
        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input 
                    type="text" 
                    ref={this.myInput}
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