"use server";

import { doc, setDoc, increment } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

export const addLike = async () => {
  const likesRef = doc(FirebaseDB, 'likes', 'counter');
  
  await setDoc(likesRef, {
    count: increment(1),
  }, { merge: true });

  return
};
