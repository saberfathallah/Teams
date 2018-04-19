import {
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import { TeamsType, TeamType } from './TeamTypes';
import getTeams from '../../services/teamServices/getTeams';
import getTeamById from '../../services/teamServices/getTeamById';

const TeamsQuery = {
  type: new GraphQLList(TeamType),
  resolve: async () => {
    const teams = await getTeams();
    return teams;   
  }
}

const FindTeamByIdQuery = {
  type: TeamType,
  args : {
    team_id: { type: GraphQLID}
  },
  resolve: async (_, { team_id }) => {
    const team = await getTeamById(team_id);
    return team;   
  }
  
}

export { TeamsQuery, FindTeamByIdQuery }