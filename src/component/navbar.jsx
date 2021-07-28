import React, { PureComponent } from 'react';

class navbar extends PureComponent {
    
    render() {
        console.log("navber 컴포넌트");
        return (
            <div className="navbar">
                <i className="fas fa-leaf navbar-logo"></i>
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </div>
        );
    }
}

export default navbar;