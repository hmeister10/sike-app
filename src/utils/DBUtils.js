import * as firebase from 'firebase';
const db = firebase.database;

const getData = (topic) => {
 return new Promise((resolve, reject) => {
  const questionsRef = db().ref(topic)

  questionsRef.on('value', (snapshot) => {
   resolve(snapshot.val());
  })
 });
}

// const getDataStream = (topic) => {
//  return new Promise((resolve, reject) => {
//   const questionsRef = db().ref(topic)

//   questionsRef.on('value', (snapshot) => {
//    resolve(snapshot.val());
//   })
//  });
// }

export default {
 getData
}