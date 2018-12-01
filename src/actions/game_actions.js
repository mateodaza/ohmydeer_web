import axios from "axios";
const hostname = ''

function setupGame(title, players) {
  let url = `${hostname}`
  return axios({
    url: url,
    method: 'post',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    data: {
      title,
      players
    }
  }).then(response => {
    return response
  }).catch( error => {
    return error.response
  });
}

const GameActions = {
  setupGame
};

export default GameActions;
