import React, { Component } from 'react'

class Test extends Component {
    state = {
        count: 0 
    }

    handleOnClick = (event) => {

        // this.setState({
        //     count: this.state.count + 1
        // })
        console.log('a');

        fetch('http://localhost:3001/genresjfkldjflds')
            .then(resp => {
                if(resp.status !== 200) {
                    throw new Error(resp.statusText);
                }
                console.log('b', resp);
                return resp.json();
            })
            .then(data => console.log('c', data))
            .catch(errors => console.log('d', errors))

        console.log('e')

        // a, e, d
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOnClick}>Click Me!</button>
                {this.state.count}
            </div>
        )
    }
}


export default Test;