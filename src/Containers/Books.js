import React, { Component } from 'react';
import Book from '../Components/Book/Book';
import { connect } from 'react-redux';

class Books extends Component {
    renderList = () => {
        return this.props.books.map((book, index) => (
            <Book key={index} title={book.title} />
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

export default connect(mapStateToProps)(Books);
