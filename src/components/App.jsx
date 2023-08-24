import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from './GlobalStyle';

import SearchBarComponent from './Searchbar/Searchbar';
import { ImageGalleryComponent } from './ImageGallery/ImageGallery';

import { Loader } from '../components/Loader/Loader';
import { ButtonLoadMore } from '../components/Button/Button';
import { toast, ToastContainer } from 'react-toastify';
import { getAsked } from '../utils/get-api';

export default function App() {
  const [images, setImages] = useState([]);
  const [textForSearch, setTextForSearch] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [noResults, setResults] = useState(false);

  useEffect(() => {
    if (textForSearch === '') return;
    const getAskedImages = async () => {
      setLoading(true);
      try {
        const images = await getAsked(textForSearch, page);

        if (images.hits.length === 0) {
          setLoading(false);
          setResults(true);
          return;
        }

        setImages(prevImages => [...prevImages, ...images.hits]);
        setTotalPages(Math.floor(images.totalHits / 12));
        setResults(false);
      } catch (error) {
        return toast.error(
          'Something went wrong. Please refresh page or try again after some time.'
        );
      } finally {
        setLoading(false);
      }
    };
    getAskedImages();
    //  console.log(`HTTP запрос за ${textForSearch}, и page=${page}`);
  }, [page, textForSearch]);

  const handleSearchSubmit = textForSearch => {
    setImages([]);
    setPage(1);
    setTextForSearch(textForSearch);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div>
      <SearchBarComponent onSubmit={handleSearchSubmit} />
      {error}

      {!page && <div>Let's start the searching.</div>}
      <ImageGalleryComponent items={images} />
      {isLoading && <Loader />}
      {noResults && !isLoading && (
        <div>
          Nothing was found for your search query. Please, try with another one.
        </div>
      )}
      {images.length !== 0 && page <= totalPages && (
        <ButtonLoadMore onClickButtonLoadMore={handleLoadMore} />
      )}

      <ToastContainer autoClose={2000} />
      <GlobalStyle />
    </div>
  );
}
