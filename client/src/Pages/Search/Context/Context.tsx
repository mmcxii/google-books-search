import React, { createContext, useReducer } from 'react';

export interface BookProps {
  _id?: string;
  title: string;
  authors: string[];
  description: string;
  image: string;
  link: string;
}
interface StateProps {
  searchResults: BookProps[];
  savedBooks: BookProps[];
}
const initialState: StateProps = {
  searchResults: [],
  savedBooks: [],
};

interface ActionProps {
  type: 'ADD_BOOKS' | 'SAVE_BOOK' | 'LOAD_SAVED_BOOKS';
  payload: any;
}
const reducer = (state: StateProps, action: ActionProps): StateProps => {
  switch (action.type) {
    case 'ADD_BOOKS':
      return { ...state, searchResults: [...action.payload] };

    case 'SAVE_BOOK':
      return { ...state, savedBooks: [...state.savedBooks, action.payload] };

    case 'LOAD_SAVED_BOOKS':
      return { ...state, savedBooks: [...action.payload] };
  }
};

export const BooksAPIContext = createContext<StateProps | any>(initialState);

export const BooksAPIProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <BooksAPIContext.Provider value={{ state, dispatch }}>{props.children}</BooksAPIContext.Provider>;
};
