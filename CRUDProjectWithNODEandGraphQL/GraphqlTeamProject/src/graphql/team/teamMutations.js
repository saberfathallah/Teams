

import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';
import createTeam from '../../services/teamServices/createTeam';
import removeTeam from '../../services/teamServices/removeTeam';
import updateTeam from '../../services/teamServices/updateTeam';
import { TeamInputType, TeamType, msgType, TeamInputTypeuu } from './TeamTypes';

const addTeamMutation = {
  type: TeamType,
  args: {
    data: {
    name: 'data',
    type: new GraphQLNonNull(TeamInputType)
    }
  },
  resolve: async (_, { data }) => {
    const results = await createTeam(data);
    return results;
  } 
}

const removeTeamMutation = {
  type: msgType,
  args: {
    teamId: {type: GraphQLID},
  },
  resolve: async (_, { teamId }) => {
    return await removeTeam(teamId);
  }
}

const updateTeamMutation = {
  type: TeamType,
  args: {
    teamId: { type: GraphQLID },
    fieldsToEdit : { type:  TeamInputTypeuu }      
  },
  resolve: async(_, { teamId, fieldsToEdit }) =>{
    return await updateTeam(teamId, fieldsToEdit)
  }
}

export default { addTeamMutation: addTeamMutation, removeTeamMutation: removeTeamMutation, updateTeamMutation: updateTeamMutation };