import React from 'react';

const ListGroup = () => {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
    'Andijan'
  ];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className='list-group container'>
        {items.map((item) => (
          <li
            className='list-group-item'
            onClick={(event) => console.log(event)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
