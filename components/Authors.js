import React, { useEffect, useState } from 'react';
import AuthorCard from './AuthorCard';
import { useAuth } from '../utils/context/authContext';
import { getAuthors } from '../api/authorData';

function ShowAuthors() {
  const [authors, setAuthors] = useState([{}]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the authors
  const getAllAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  // TODO: make the call to the API to get all the authors on component render
  useEffect(() => {
    getAllAuthors();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex-wrap">
      {authors.map((author) => (
        <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllAuthors} />
      ))}
    </div>
  );
}

export default ShowAuthors;
