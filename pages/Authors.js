import React, { useEffect, useState } from 'react';
import AuthorCard from '../components/AuthorCard';
import { useAuth } from '../utils/context/authContext';
import { getAuthors } from '../api/authorData';

export default function ShowAuthors() {
  const [authors, setAuthors] = useState([]);

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
    <div className="d-flex flex-wrap">
      {authors.map((author) => (
        <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllAuthors} />
      ))}
    </div>
  );
}

// ALTERNATE CODE BELOW:

// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../utils/context/authContext';
// import { getAuthors } from '../api/authorData';
// import AuthorCard from '../components/AuthorCard';

// export default function ShowAuthors() {
//   const [authors, setAuthors] = useState([]);
//   const { user } = useAuth();

//   useEffect(() => {
//     getAuthors(user.uid).then(setAuthors);
//   }, [user.uid]);
//   return (
//     <div>{authors.map((author) => (
//       <AuthorCard key={author.firebaseKey} authorObj={author} />
//     ))}
//     </div>
//   );
// }
