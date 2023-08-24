import React, { useState } from 'react';

import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled.js';

import { AiOutlineSearch } from 'react-icons/ai';

import { toast } from 'react-toastify';

// import PropTypes from 'prop-types';

export default function SearchBarComponent({ onSubmit }) {
  const [textForSearch, setTextForSearch] = useState('');

  // Записуємо в стейт значення інпута
  const onChangeSearchBarComponent = event => {
    setTextForSearch(event.currentTarget.value.toLowerCase());
  };

  // Передаємо в App значення нового value і очищуємо форму
  const onSubmitSearchBarComponent = event => {
    event.preventDefault();

    if (textForSearch.trim() === '') {
      return toast.error('Please enter key words for search');
    }

    onSubmit(textForSearch);

    setTextForSearch('');
  };
  return (
    <Searchbar className="searchbar">
      <SearchForm className="form" onSubmit={onSubmitSearchBarComponent}>
        <SearchFormButton type="submit" className="button">
          <AiOutlineSearch size="24" />
        </SearchFormButton>
        <SearchFormInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChangeSearchBarComponent}
          value={textForSearch}
        />
      </SearchForm>
    </Searchbar>
  );
}
