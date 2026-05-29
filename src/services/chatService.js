import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  where,
  getDocs,
  orderBy,
} from "firebase/firestore";

import { db } from "./firebase";

// SAVE CHAT
export async function saveChat(
  userId,
  question,
  answer
) {

  try {

    await addDoc(
      collection(db, "chats"),
      {
        userId,
        question,
        answer,
        createdAt:
          serverTimestamp(),
      }
    );

  } catch (error) {

    console.log(error);
  }
}

// GET CHATS
export async function getChats(
  userId
) {

  try {

    const q = query(
      collection(db, "chats"),

      where("userId", "==", userId),

      orderBy(
        "createdAt",
        "asc"
      )
    );

    const querySnapshot =
      await getDocs(q);

    const chats = [];

    querySnapshot.forEach((doc) => {

      chats.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return chats;

  } catch (error) {

    console.log(error);

    return [];
  }
}