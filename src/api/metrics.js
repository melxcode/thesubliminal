import firebase from "../firebase";

export const postMetric = async (metric) => {
  const rootRef = firebase.database().ref("/");
  const metrics = rootRef.child("metrics");
  await metrics.push(metric);
};
