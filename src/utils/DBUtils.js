import * as firebase from 'firebase';
const db = firebase.database;

const getData = (topic) => {
 return new Promise((resolve, reject) => {
  const ref = db().ref(topic)

  ref.on('value', (snapshot) => {
   resolve(snapshot.val());
  })
 });
}

const writeData = (topic, payload) => {
 db().ref(topic).set(payload);
}

export default {
 getData,
 writeData
}