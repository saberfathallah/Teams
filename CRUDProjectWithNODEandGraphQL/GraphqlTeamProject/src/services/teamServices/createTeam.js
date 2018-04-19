
import fetch from 'node-fetch';

function request(data) {
  const url = `${process.env.TEAM_SERVICES}/teams/add`;
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ data }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/**
 * @param {string} name
 * @param {string} desvription
 */
async function createTeam(data) {
  const response = await request(data);
  if (response.status >= 500) {
    throw new Error('team Microservice internal error.');
  }

  if (response.status !== 200 ) {
    throw new Error('Failed creating new team');
  }

  const jsonData = await response.json();  
  return jsonData.data;
}


export default createTeam;
