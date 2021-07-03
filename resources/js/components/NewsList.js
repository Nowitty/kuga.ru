import React from 'react';
import ReactDOM from 'react-dom';

function NewsList() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div>react is here</div>
                        <div>react now</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsList;

if (document.getElementById('news-list')) {
    ReactDOM.render(<NewsList />, document.getElementById('news-list'));
}
