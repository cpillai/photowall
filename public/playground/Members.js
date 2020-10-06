import React, {Component} from 'react';;

class Members extends Component {
    render() {
        return <ol>
                { this.props.names.map((tas,index) => <li key={tas+index}> {tas} </li>)}
            </ol>
    }
}

export default Members;