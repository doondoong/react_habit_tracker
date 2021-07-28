import React, { Component } from 'react';

class reset extends Component {
    
    handleReset = () => {
        this.props.onReset(this.props.habits);
    };

    render() {
        console.log("reset 컴포넌트");
        return (
            <div>
                <button className="habits-reset" onClick={this.handleReset}>
                    Reset All
                </button>
            </div>
        );
    }
}

export default reset;