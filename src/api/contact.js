import firebase from "../firebase";

export const postComment = (formData) => {
  const rootRef = firebase.database().ref("/");
  const mesagges = rootRef.child("messages");
  mesagges.push(formData);
};

export const getRequests = async () => {
  const messages = await firebase
    .database()
    .ref("messages")
    .once("value")
    .then((snap) => {
      const items = [];
      snap.forEach((itemSnap) => {
        items.push({ ...itemSnap.val(), key: itemSnap.key });
      });
      return items;
    });

  return messages;
};

export const deleteMessage = async (key) => {
  const message = firebase.database().ref(`messages/${key}`);
  await message.remove();
};
