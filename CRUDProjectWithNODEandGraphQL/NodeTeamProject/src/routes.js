import  router from '../src/routes/teams/routesTeams';

export default (app) => {
  app.use('/teams', router);

};
