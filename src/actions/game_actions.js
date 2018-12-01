import axios from "axios";
const hostname = 'https://oh-my-deer-core.herokuapp.com'

function setupGame(title, players, address, time) {
  let url = `${hostname}/game_rooms`
  return axios({
    url: url,
    method: 'post',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    data: {
      title,
      address,
      time,
      players
    }
  }).then(response => {
    return response
  }).catch( error => {
    return error.response
  });
}

function getRoom(playerId) {
  let url = `${hostname}/game_rooms/users/${playerId}`
  return axios({
    url: url,
    method: 'get',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  }).then(response => {
    return response
  }).catch( error => {
    return error.response
  });
}

function sendHint(user_id, friend_id, hint) {
  let url = `${hostname}/hints`
  return axios({
    url: url,
    method: 'post',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    data: {
      user_id,
      friend_id,
      hint
    }
  }).then(response => {
    return response
  }).catch( error => {
    return error.response
  });
}

const GameActions = {
  setupGame,
  getRoom,
  sendHint
};

export default GameActions;
