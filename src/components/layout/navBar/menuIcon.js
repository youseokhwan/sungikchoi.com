import React from 'react';
import styled from 'styled-components';

const MenuIcon = ({ onClickHandler, toggle }) => {
  return (
    <MenuIconButton onClick={onClickHandler} toggle={toggle} aria-label="Menu">
      <MenuIconBreadTop>
        <div />
      </MenuIconBreadTop>
      <MenuIconBreadBottom>
        <div />
      </MenuIconBreadBottom>
    </MenuIconButton>
  );
};

const MenuIconBreadTop = styled.div`
  top: 22px;
`;

const MenuIconBreadBottom = styled.div`
  bottom: 22px;
`;

const MenuIconButton = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    display: block;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    width: ${({ theme }) => theme.navHeight};
    height: ${({ theme }) => theme.navHeight};
    border: none;
    background-color: transparent;

    & > div {
      position: absolute;
      width: 18px;
      height: 1px;
      right: ${({ theme }) => theme.padding.sm};
      opacity: 0.8;
      transition: opacity 0.3s ease,
        transform
          ${({ toggle }) => (toggle === true ? '0.1s ease' : '0.2s ease 0.1s')};
    }

    & > div > div {
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.color.text};
      transition: transform
        ${({ toggle }) => (toggle === true ? '0.2s ease 0.1s' : '0.1s ease')};
    }

    ${MenuIconBreadTop} {
      transform: ${({ toggle }) =>
        toggle === false ? 'none' : 'translateY(4.5px)'};
      div {
        transform: ${({ toggle }) =>
          toggle === false ? 'none' : 'rotate(45deg)'};
      }
    }

    ${MenuIconBreadBottom} {
      transform: ${({ toggle }) =>
        toggle === false ? 'none' : 'translateY(-4.5px)'};
      div {
        transform: ${({ toggle }) =>
          toggle === false ? 'none' : 'rotate(-45deg)'};
      }
    }

    &:hover > div {
      opacity: 1;
    }
  }
`;

export default MenuIcon;
