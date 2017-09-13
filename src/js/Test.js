import React, {Component} from 'react';

export default class ShowMoreLess extends Component {
    constructor(props) {
        super(props);

        this.state = {
            elements: [],
            isShow: true,
            showLines: this.props.showLines,
        };

        this.showMore = this.showMore.bind(this);
        this.createList = this.createList.bind(this);
        this.renderBtnName = this.renderBtnName.bind(this);

    }


    //@TODO Check destructarization in ES6
    // this.props.elements
    // elements: this.props.elemnts


    componentWillMount() {
        const { elements } = this.props;
        if (elements) {
            this.setState({ elements });
        }
    }

    showMore() {
        const { isShow, elements, showLines } = this.state;

        if (showLines > elements.length) return;

        if (isShow) {
            return this.setState({showLines: elements.length, isShow: false })
        }

        return this.setState({showLines: this.props.showLines, isShow: true })
    }

    createList() {
        const { elements, showLines } = this.state;

        return elements.slice(0, showLines).map((element, i) => {
            return (
                <li key={i}>{element.title} - {element.checkbox}</li>
            )
        })
    }

    renderBtnName() {
        const { isShow, elements, showLines } = this.state;

        if (showLines > elements.length) return <div></div>;

        if (isShow) {
            return (
                <a
                    className="btn btn-primary"
                    onClick={this.showMore}>
                    Show more
                </a>
            )
        }

        return(
            <a
                className="btn btn-primary"
                onClick={this.showMore}>
                Show less
            </a>
        );
    }


    render() {
        console.log(this.state);
        return (
            <div className="container">
                <div className="row">
                    <h3>List Amenities</h3>
                    <ul>
                        {this.createList()}
                    </ul>
                    {this.renderBtnName()}
                </div>
            </div>
        )
    }
}