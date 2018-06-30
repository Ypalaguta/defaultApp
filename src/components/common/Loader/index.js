import React, {Component} from 'react'
import './loader.css'

class Loader extends Component {
    render() {
        return (
            <div className="lds-css ng-scope">
                <div style={(this.props.throwRight) ?
                    {position: 'absolute', right: '10px', top: '70px'}
                    :
                    {width:'100%',height:'100%'}} className="lds-rolling">
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Loader