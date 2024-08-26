
import { doc, getDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const getLikes = async() => {
  const docRef = doc(FirebaseDB, "likes", "counter");
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    const data = docSnap.data();
    if (data && typeof data.count === "number") {
      return data;
    }
  }
  
  console.log("firebase server error");
  return null; // O podrías devolver un valor por defecto, como { Likes: 0 }
}