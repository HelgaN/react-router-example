import React from 'react';
import Sidenav from '../components/Sidenav';

function Books(props) {
    return (
        <main id="books">
            <Sidenav />
            <div className="mdc-layout-grid">
              {props.children}
            </div>
        </main>
    );
}

export default Books;
