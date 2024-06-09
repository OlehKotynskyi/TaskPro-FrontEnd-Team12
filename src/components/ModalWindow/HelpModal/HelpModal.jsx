import React from 'react';
import { ModalContainer } from '../Shared/ModalContainer/ModalContainer';

export const HelpModal = ({ onClose }) => {
  return (
    <ModalContainer onClose={onClose} modalTitle={'Need help'}></ModalContainer>
  );
};
