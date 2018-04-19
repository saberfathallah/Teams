import { GraphQLObjectType } from 'graphql';

import { TeamsQuery, FindTeamByIdQuery } from './team/TeamQueries';

export default new GraphQLObjectType ({
    name:'Viewer',
    fields: () => ({
        TeamsQuery,
        FindTeamByIdQuery
    })
})