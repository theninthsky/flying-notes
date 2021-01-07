import styled from 'styled-components'

import { VIEWPORT_4, NOT_MOBILE } from 'media-queries'

export const Wrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 250px;
  margin: 10px 0;
  border: 1px solid var(--secondary-color);
  border-radius: 4px;
  background-color: var(--primary-color);
  opacity: ${({ saving }) => (saving ? '0.5' : '1')};
  pointer-events: ${({ saving }) => (saving ? 'none' : 'auto')};
  transition: border-color 0.1s;
  animation: showNewNote 0.25s;

  @media ${NOT_MOBILE} {
    &:hover {
      border-color: #b4b4b4;
    }
  }

  @keyframes showNewNote {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media ${VIEWPORT_4} {
    width: 300px;
    margin: 15px;
  }
`
const Input = styled.input`
  box-sizing: border-box;
  border: none;
  outline: none;
  font-family: inherit;
  color: inherit;
  background-color: inherit;
  text-align: center;

  &::placeholder {
    color: var(--placeholder-color);
  }
`
export const Category = styled(Input)`
  padding: 4px;
  border-bottom: 1px solid var(--secondary-color);
  background-color: var(--secondary-color);
  border-radius: 4px 4px 0 0;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 3px;
`
export const Title = styled(Input)`
  margin: 8px 12px 0;
  padding: 0;
  font-size: 18px;
  font-weight: bold;
`
export const Content = styled.textarea`
  margin: 6px 12px 10px;
  padding: 0;
  border: none;
  outline: none;
  resize: none;
  white-space: pre;
  font-family: inherit;
  font-size: 16px;
  color: inherit;
  background-color: inherit;
  cursor: auto;

  @media ${NOT_MOBILE} {
    overflow: hidden;

    &:hover {
      overflow: scroll;
    }

    &::-webkit-scrollbar {
      width: 7.5px;
      height: 7.5px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: var(--secondary-color);
    }

    &::-webkit-scrollbar-corner {
      display: none;
    }
  }
`
export const Save = styled.input`
  margin: 0 auto;
  padding: 4px 20px;
  border: 1px solid var(--secondary-color);
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  box-sizing: border-box;
  outline: none;
  font-family: inherit;
  text-align: center;
  color: inherit;
  background-color: var(--secondary-color);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`
