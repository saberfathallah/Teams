import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
    GraphQLBoolean,
    GraphQLNonNull,
  } from 'graphql';
  
  const TeamType = new GraphQLObjectType({
    name: 'Team',
    fields:{
      _id: {type: GraphQLString},
      id: {type: GraphQLInt},
      name: {type: GraphQLString},
      description: {type: GraphQLString},
    }
  });
  
  const TeamInputType = new GraphQLInputObjectType({
    name: 'TeamInput',
    fields:{
      _id: {type: GraphQLString},
      id: {type: GraphQLInt},
      name: {type: GraphQLString},
      description: {type: GraphQLString},
    }
  });
  
  const TeamInputTypeuu = new GraphQLInputObjectType({
    name: 'uuu',
    fields:{
      name: {type: GraphQLString},
      description: {type: GraphQLString},
    }
  });

  const TeamsType = new GraphQLObjectType({
    name: 'Teams',
    fields: {
      Teams: { type: new GraphQLList(TeamType) }
    }
  });

  const msgType = new GraphQLObjectType({
    name: 'msgType',
    fields: () => ({
      status: { type: GraphQLString },
      message: { type: GraphQLString },
    }),
  });
  
  export {
    msgType,
    TeamsType,
    TeamInputType,
    TeamType,
    TeamInputTypeuu,
  }