import React from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function UserProfile() {
  const { user } = useAuth();
  return (
    <div>
      <h1>{user.displayName}</h1>
      <Image src={user.photoURL} alt="userURL" width="100px" height="100px" />
      <h3>{user.email}</h3>
      <h4>Last SIgn In: {user.metadata.lastSignInTime}</h4>
      <Button type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}
