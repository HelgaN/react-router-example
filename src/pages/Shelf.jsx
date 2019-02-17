import React from 'react';

import books from '../data/books';
import Card from '../components/Card';


function Shelf(props) {
    const booksFilter = books.filter(book => book.topic === props.params.topic);

    return (
      <div className="mdc-layout-grid__inner">
          {booksFilter.map((book, index) =>
              <div key={index} className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
                  <Card book={book} />
              </div>
          )}
      </div>
    );
}

export default Shelf;
