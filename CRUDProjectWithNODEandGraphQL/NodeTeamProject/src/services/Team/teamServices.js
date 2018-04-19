import Team from '../../models/team';
import express from 'express';

const router = express.Router();

export async function addTeam(data) {
  try {
    const team = await Team.create(data)
      return team;
  } catch (error) {
      console.log('error add', error)
      return error;
    }
};

export async function getAllTeams() {
  try {
    const teams = await Team.find().lean();
    return teams;
  }
  catch (error) {
    console.log(error);
    return error;
    }
}

export function removeTeam(id) {    
  return new Promise((resolve, reject) => {
    Team.remove({ id: id,}, 
    (err) => {
      if (err) {
        return reject(err);
      }
        return resolve(true);
    });
  });
}

export function removeAllTeams() {
  return new Promise((resolve, reject) => {
    Team.remove({}, (err) => {
      if (err) {
        logger.error(err);
        return reject(err);
      }
      return resolve(true);
    });
  });
}

export async function editTeam(id, fieldsToEdit) {
  try {
    const query = { id: id };
    const options = { new: true };
    return await Team.findOneAndUpdate(query, fieldsToEdit, options);
  } catch (error) {
    return logger.error(error);
   }
  }

export function getTeamById(TeamId) {
  return new Promise((resolve, reject) => {
    Team.find({ id: TeamId })
      .lean()
      .exec((err, result) => {
        if (err) {
          logger.error(err);
          return reject(err);
        }
          return resolve(result);
    });
  });
  }

export async function countTeams() {
  try {
    const numberTeams = await Team.count();
    return numberTeams;
  } catch(error) {
    return error;
  }
}