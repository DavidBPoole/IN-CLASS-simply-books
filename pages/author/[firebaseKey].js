import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import BookCard from '../../components/BookCard';
import viewAuthorDetails from '../../api/mergedData';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  const showAuthorDetails = () => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  };

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <image src={authorDetails.image} alt={authorDetails.first_name} style={{ width: '200px' }} />
        </div>
        <div className="text-white ms-5 details">
          <h5>
            {authorDetails.first_name}{authorDetails.last_name}
            {authorDetails.favorite ? ' 🤍' : ''}
          </h5>
          Author Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a>
          <hr />
        </div>
      </div>
      <hr />
      <div className="d-flex flex-wrap">
        {authorDetails.books?.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} onUpdate={showAuthorDetails} />
        ))}
      </div>
    </>
  );
}
