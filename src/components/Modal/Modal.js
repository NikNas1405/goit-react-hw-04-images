import Modal from 'react-modal';

import { useEffect } from 'react';

import { Overlay, ModalBox, ModalDesc } from './Modal.styled';

Modal.setAppElement('#root');

export const ModalOverlay = ({ largeUrl, tags, onClick }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClick();
      }
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    };
  }, [onClick]);

  return (
    <Overlay className="overlay" onClick={onClick}>
      <ModalBox className="modal">
        <img src={largeUrl} alt={tags} />
        <ModalDesc>{tags}</ModalDesc>
      </ModalBox>
    </Overlay>
  );
};
