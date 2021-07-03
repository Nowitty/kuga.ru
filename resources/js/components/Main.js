import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        /* fetch API in action */
        fetch('/api/news')
            .then(response => {
                return response.json();
            })
            .then(news => {
                //Fetched product is stored in the state
                this.setState({ news });
            });
    }

    renderNews() {
        if (this.state.news.length < 1 ) {
            return (
              <h3>Статей пока нет...</h3>
            );
        }
        return this.state.news.map(newsItem => {
            return (
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */
                <li key={newsItem.id} >
                    { newsItem.title }
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <h3>All Products</h3>
                { this.renderNews() }
            </div>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
