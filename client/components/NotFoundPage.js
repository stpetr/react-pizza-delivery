import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div className="page">
        <h2>404: Not Found</h2>

        <p>How on Earth did you get here?!</p>

        Go to <Link to="/">home page</Link> or stay here for a while if you're not that hungry
    </div>
);

export default NotFoundPage;
