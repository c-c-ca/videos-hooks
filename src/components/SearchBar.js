import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmitHandler = event => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmitHandler}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={event => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
