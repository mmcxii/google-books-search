import React, { createContext, useReducer } from 'react';

export interface BookProps {
  title: string;
  authors: string[];
  description: string;
  image: string;
  link: string;
}
interface StateProps {
  searchResults: BookProps[];
}
const initialState: StateProps = {
  searchResults: [],
};

interface ActionProps {
  type: 'ADD_BOOKS';
  payload: any;
}
const reducer = (state: StateProps, action: ActionProps): StateProps => {
  switch (action.type) {
    case 'ADD_BOOKS':
      return { searchResults: [...action.payload] };
  }
};

export const BooksAPIContext = createContext<StateProps | any>(initialState);

export const BooksAPIProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <BooksAPIContext.Provider value={{ state, dispatch }}>{props.children}</BooksAPIContext.Provider>;
};
