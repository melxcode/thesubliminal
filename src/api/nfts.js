import firebase from "../firebase";

export const getNfts = async () => {
  const nfts = await firebase
    .database()
    .ref("nfts")
    .once("value")
    .then((snap) => {
      const items = [];
      snap.forEach((itemSnap) => {
        items.push({ ...itemSnap.val(), key: itemSnap.key });
      });
      return items;
    });
  return nfts;
};

export const updateNftLikes = async (operation, nft) => {
  const rootRef = firebase.database().ref("/");
  const nfts = rootRef.child("nfts");

  const currentNftRef = nfts.child(nft.id);
  const updatedNft = {
    ...nft,
    isFavorite: false,
    likes: operation === "ADD" ? nft.likes + 1 : nft.likes - 1,
  };
  await currentNftRef.update(updatedNft);

  return updatedNft;
};
