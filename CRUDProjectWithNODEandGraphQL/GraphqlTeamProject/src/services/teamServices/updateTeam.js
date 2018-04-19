import fetch from 'node-fetch';

function askMicroservice(teamId, fieldsToEdit) {
  const url = `${process.env.TEAM_SERVICES}/teams/edit/${teamId}`;
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify({ fieldsToEdit }),    
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

async function updateTeam(teamId, fieldsToEdit) {
  if (typeof teamId === 'undefined') {
    throw new Error('verify team id');
  }
  const response = await askMicroservice(teamId, fieldsToEdit);
    
  if (response.status !== 200 && response.status !== 400) {
    throw new Error('Failed deleting team');
  }
    
  const jsonResponse = await response.json();
    return jsonResponse.new;
  }
        
export default updateTeam;