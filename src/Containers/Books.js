import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectBook from '../actions/SelectBook';

class Books extends Component {
    renderList = () => {
        return this.props.books.map((book, index) => (
            <li key={index} onClick={() => this.props.selectBook(book)}>
                {book.title}
            </li>
        ));
    };
    render() {
        return <ul>{this.renderList()}</ul>;
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Books);
