import React, { Component } from 'react';

class BookList extends Component {
    renderList() {
        this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item"> {book.title} </li>
                <li className="list-group-item">Merhaba </li>
            );
        })
    }

    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}
