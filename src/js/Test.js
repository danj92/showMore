import React, {Component} from 'react';

export default class ShowMoreLess extends Component {
    constructor(props) {
        super(props);

        const numberUserElement = props.howManyElementShow;


        this.state = {
            elements: [
                {"title": "Title 1", "checkbox": "TV"},
                {"title": "Title 2", "checkbox": "TV"},
                {"title": "Title 3", "checkbox": "TV"},
                {"title": "Title", "checkbox": "TV"},
                {"title": "Title", "checkbox": "TV"},
                {"title": "Title", "checkbox": "TV"},
                {"title": "Title", "checkbox": "TV"},
            ],

            showElements: numberUserElement || 3
        };


        console.log(this.state.elements);

        this.showMore = this.showMore.bind(this);
        this.createList = this.createList.bind(this);
        this.renderBtnName = this.renderBtnName.bind(this);

    }


    showMore() {

        this.state.showElements === 3 ? (
            this.setState({showElements: this.state.elements.length})
        ) : (
            this.setState({showElements: 3 })
        )
    }

    createList() {
        const { elements, showElements } = this.state;

        return elements.slice(0, showElements).map((element, i) => {
            return (
                <li key={i}>{element.title} - {element.checkbox}</li>
            )
        })
    }

    renderBtnName() {
        if (this.state.showElements > 3) {
            return <span>Show less</span>
        }
        return <span>Show more</span>
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <h3>List Amenities</h3>
                    <ul>
                        {this.createList()}
                    </ul>
                    <p>
                        <a className="btn btn-primary" onClick={this.showMore}>
                            {this.renderBtnName()}
                        </a>
                    </p>
                </div>
            </div>
        )
    }
}