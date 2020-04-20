import React, { Component } from 'react';
class ChevronDownAni extends Component {
    state = {
        a: 1,
        b: 0.3,
        flag: true
    }
    funAni = () => {
        this.setState({ flag: !this.state.flag });
        if (this.state.flag) {
            this.setState({ a: 0.3 });
            this.setState({ b: 1 });
        } else {
            this.setState({ a: 1 });
            this.setState({ b: 0.3 });
        }
    }
    componentDidMount() {
        setInterval(this.funAni, 800);
    }
    render() {
        return (
            <div>
                <i style={{ opacity: this.state.a, transition: '1s' }} className="fas fa-chevron-down"></i><br></br>
                <i style={{ opacity: this.state.b, transition: '1s' }} className="fas fa-chevron-down"></i>
            </div>
        );
    }
}
export default ChevronDownAni;