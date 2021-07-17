import React, { PureComponent } from 'react'

class PureComponent extends PureComponent {
    render() {
        return (
            <div>
                PureComponent {this.props.name}
            </div>
        )
    }
}

export default PureComponent;
