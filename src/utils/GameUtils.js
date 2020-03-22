import cloneDeep from 'lodash/cloneDeep';
import keyBy from 'lodash/keyBy';
import remove from 'lodash/remove';

import DBUtils from "./DBUtils";


const joinGame = async (code, currentPlayerName) => {
 try {
  // Game data exists for code
  const gameData = await DBUtils.getData(`games/${code}`)

  if (!!gameData) {
   // add currentPlayer to the game
   const playerMap = keyBy(gameData.players, 'id');
   const currentPlayer = {
    id: currentPlayerName.toLowerCase(),
    name: currentPlayerName
   }

   // check for an existing player and increment the ID if the name is the same
   let count = 0;
   let userExists = true;
   let newPlayerId = currentPlayer.id;
   do {

    // if player id already exists
    if (!!playerMap[newPlayerId]) {
     newPlayerId = `${currentPlayer['id']}-${++count}`
    } else {
     userExists = false
    }

   } while (userExists)

   // save user to the game
   currentPlayer['id'] = newPlayerId;
   gameData.players.push(currentPlayer);
   DBUtils.writeData(`games/${code}`, gameData)


   // return game data
   return gameData;
  } else {
   console.log('NO GAME DATA');
   throw new Error('no data');
  }
 } catch (err) {
  console.log(err);
  throw err;
 }
};

const startNewGame = async (currentPlayer, rounds) => {
 console.log('START NEW GAME');

 // create a new 6 digit code
 const newCode = await _getRandomCode();
 if (newCode) {
  // Get all questions
  // const allQuestions = await DBUtils.getData('questions')

  // Get a random questions for rounds  
  const dummyQuestions = [
   {
    "id": 1,
    "text": "Long Question 1"
   },
   {
    "id": 2,
    "text": "Long Question 2"
   },
   {
    "id": 3,
    "text": "Long Question 3"
   },
   {
    "id": 4,
    "text": "Long Question 4"
   },
   {
    "id": 5,
    "text": "Long Question 5"
   },
   {
    "id": 6,
    "text": "Long Question 6"
   },
   {
    "id": 7,
    "text": "Long Question 7"
   },
   {
    "id": 8,
    "text": "Long Question 8"
   },
   {
    "id": 9,
    "text": "Long Question 9"
   },
   {
    "id": 10,
    "text": "Long Question 10"
   }
  ]
  const questions = _getRandomElements(dummyQuestions, rounds)

  // create an entry in the game with base strucure
  const newGameModel = {
   players: [{
    id: currentPlayer.toLowerCase(),
    name: currentPlayer
   }],
   questions
  }

  // write to the DB
  DBUtils.writeData(`games/${newCode}`, newGameModel)

  return newCode;
 }

}

const _getRandomCode = async () => {
 let data, randomNumber;

 do {
  // generate RandomNumber
  randomNumber = Math.floor(Math.random() * 1000000);

  if (randomNumber.length === 6) {
   // check if game exists
   data = await DBUtils.getData(`games/${randomNumber}`);
  }
 } while (randomNumber.length <= 6 && data === null)

 // no existing game data for this code,
 // we can use this code to create a new one
 return randomNumber;
}

const _getRandomElements = (elementList, noOfElements) => {
 let listCopy = cloneDeep(elementList);
 const finalList = [];
 while (finalList.length !== noOfElements) {
  // get a random index
  const index = Math.floor(Math.random() * listCopy.length);

  // get the element
  const elem = listCopy[index]

  // remove the element from the list
  remove(listCopy, elem);

  // add it to our final list
  finalList.push(elem)

 }

 return finalList;
}

export default {
 joinGame,
 startNewGame
}