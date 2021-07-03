import React from 'react';
import ReactDOM from 'react-dom';

function NewsItem() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div>item</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;

if (document.getElementById('news-item')) {
    ReactDOM.render(<NewsItem />, document.getElementById('news-item'));
}
