import React from 'react';
import {Link} from 'react-router';

import topics from '../data/topics';

function Sidenav() {
    return (
      <div className="mdc-tab-bar">
        {topics.map(topic =>
            <Link
                key={topic.id}
                to={`/books/${topic.id}`}
                className="mdc-tab">
                <img src={`/img/topics/${topic.id}.svg`} className="mdc-list-item__start-detail"/>
                    {topic.title}
            </Link>
        )}
      </div>
    );
}

export default Sidenav;
