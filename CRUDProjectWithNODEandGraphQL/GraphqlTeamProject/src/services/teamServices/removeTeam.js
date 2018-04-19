

import fetch from 'node-fetch';
/**
 * Delete the favotiteProduct with its productId
 * @param {object} teamId
 * @returns {object}
 */
function askMicroservice(teamId) {
  const url = `${process.env.TEAM_SERVICES}/teams/remove/${teamId}`;
  
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

async function removeTeam(teamId) {
  if (typeof teamId === 'undefined') {
    throw new Error('verify team id');
  }

  const response = await askMicroservice(teamId);

  if (response.status !== 200 && response.status !== 400) {
    throw new Error('Failed deleting team');
  }

  const jsonResponse = await response.json();
  return jsonResponse;
}

export default removeTeam;
