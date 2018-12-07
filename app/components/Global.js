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
                <FormGroup>
                  <div className="header-area">
                    <h2>SHOPPING CART</h2>
                    <img src="http://www.clker.com/cliparts/l/z/3/L/h/3/white-shopping-cart-md.png" className="funnyImage"/>
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
                  </div>
                  <div className="funnyDiv"></div>
                </FormGroup>
                <Gallery
                    items={this.state.items}
                />
            </div>
        )
    }
}

export default Global;
