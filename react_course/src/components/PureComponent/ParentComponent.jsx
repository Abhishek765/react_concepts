import React, { Component } from 'react'
import MemoComponent from '../Memo/Memo';
import PureComponent from './PureComponent';
import RegularComponent from './RegularComponent';

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Abhishek"
        }
    }

    componentWillMount() {
        setInterval(() => {
            this.setState({
                name: "Abhishek"
            })
        }, 2000);
    }

    render() {
        return (
            <div>
                {/* Pure Components in class */}
                {/* <RegularComponent name={this.state.name}/>
                <PureComponent name={this.state.name}/> */}

                {/* Memo Component */}
                <MemoComponent name={this.state.name} />

            </div>
        )
    }
}

export default ParentComponent;
