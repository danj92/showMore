import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Tesct from './Test'


class Project extends Component {
    render(){
        return(
            <Tesct  />
        )
    }
}


ReactDOM.render(
    <Project/>,
    document.getElementById('root')
);