import React, { Component } from 'react';

import Toolbar from './components/Toolbar';
import Content from './components/Content';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Toolbar />

                <Content>
                    {this.props.children}
                </Content>
            </div>
        );
    }
}

export default App;
