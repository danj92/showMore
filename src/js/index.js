import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Tesct from './Test'


class Project extends Component {
    render(){
        return(
            <Tesct
                elements={
                    [
                        {"title": "Title 123", "checkbox": "TV"},
                        {"title": "Title 321321", "checkbox": "TV"},
                        {"title": "Title 3333", "checkbox": "TV"},
                        {"title": "Title", "checkbox": "TV"},
                        {"title": "Title", "checkbox": "TV"},
                        {"title": "Title", "checkbox": "TV"},
                        {"title": "Title", "checkbox": "TV"},
                    ]
                }
                showLines={3}/>
        )
    }
}


ReactDOM.render(
    <Project/>,
    document.getElementById('root')
);