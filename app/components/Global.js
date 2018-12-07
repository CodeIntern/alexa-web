import React, {Component} from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Gallery from './Gallery';

class Global extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            items: []
        }
    }

    componentDidMount() {
      this.timerId = setInterval(
        () => {this.search()},
        1000
      );

      this.isSearching = false;
    }

    componentWillUnmount() {
      clearInterval(this.timerId);
    }

    search() {
        if(this.isSearching) return;

        this.isSearching = true;

        const BASE_URL = 'https://3cpu4y85vj.execute-api.us-east-1.amazonaws.com/phase1/cart';

        fetch(`${BASE_URL}`, {
            method: 'GET'
        }).then(response => {
            if(response.ok) {
                return response.json();
            }
            else {
                console.log("Response ERR");
                return undefined;
            }
        }).then(json => {
            // console.log(json);
            if(json !== undefined){
                let items = json;
                this.setState({items});
            }

            this.isSearching = false;
        });
    }

    render() {
        return (
            <div className="Global">
                <h2>Shopping Cart</h2>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for an item"
                            onChange={event =>
                                this.setState({query: event.target.value})
                            }
                            onKeyPress= {event => {
                                    if (event.key === 'Enter') {
                                        this.search();
                                    }
                                }
                            }
                        />
                        <InputGroup.Addon
                            onClick={() =>
                                this.search()
                            }
                        >
                            <Glyphicon
                                glyph="search"
                            ></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <Gallery
                    items={this.state.items}
                />
            </div>
        )
    }
}

export default Global;
