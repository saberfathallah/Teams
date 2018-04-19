import fetch from 'node-fetch';

function askMicroservice(teamId) {
  const url = `${process.env.TEAM_SERVICES}/teams/team/${teamId}`;
  return fetch(url, {
    method: 'GET',
    headers: {
        'content-type': 'application/json'
    },
  });
}

async function getTeamById(teamId) {
  if (typeof teamId === 'undefined') {
    throw new Error('verify team id');
  }
  const response = await askMicroservice(teamId);
    
  if (response.status !== 200 && response.status !== 400) {
    throw new Error('Failed deleting team');
  }
    
  const jsonResponse = await response.json();
    return jsonResponse.data[0];
  }
    
export default getTeamById;