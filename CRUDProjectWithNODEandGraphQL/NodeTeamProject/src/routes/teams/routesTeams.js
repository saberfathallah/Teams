import { addTeam, getAllTeams, removeTeam, removeAllTeams, editTeam, getTeamById, countTeams } from '../../services/Team/teamServices';
import express from 'express';

const router = express.Router();
router.post('/add', async(req, res) => {  
  const data = req.body.data;
  if (data.length === 0 || !data) {
    const msg = 'Missing team Data!';
    const status = 'failed';
    return res.json({ status, message: msg });
  }
  
  addTeam(data).then((result) => {
    const msg = 'Insert successfully!';
    const status = 'success';
    return res.json({ status, message: msg, data: result });
  }).catch((err) => {
    const msg = err;
    const status = 'failed';
    return res.json({ status, message: msg });
  });
  return true;
});

router.get('/allTeams', (req, res) => {
  getAllTeams().then((result) => {
    const msg = 'get all Teams successfully!';
    const status = 'success';
    return res.json({ status, message: msg, data: result });
  }).catch((err) => {
    const msg = err;
    const status = 'failed';
    return res.json({ status, message: msg });
  });
  return true;
});

router.get('/team/:id', (req, res) => {
  getTeamById(req.params.id).then((result) => {
    const msg = 'Get team successfully!';
    const status = 'success';
    return res.json({ status, message: msg, data: result });
  }).catch((err) => {
    const msg = err;
    const status = 'failed';
    return res.json({ status, message: msg });
  });
  return true;
});

router.delete('/remove/:id', (req, res) => {
  const { id } = req.params;
  if ((id === undefined) || (!id)) {
    const msg = 'Missing team ID!';
    const status = 'failed';
    return res.json({ status, message: msg });
  }

  removeTeam(id).then((result) => {
    if (result) {
      const msg = 'remove successfully!';
      const status = 'success';
      return res.json({ status, message: msg });
    }
  }).catch((err) => {
    const msg = err;
    const status = 'failed';
    return res.json({ status, message: msg });
  });
  return true;
});

router.delete('/removeAllTeams', (req, res) => {
  removeAllTeams().then((result) => {
    if (result) {
      const msg = 'Remove successfully!';
      const status = 'success';
      return res.json({ status, message: msg });
    }
    const msg = '';
    const status = 'failed';
    return res.json({ status, message: msg });
  }).catch((err) => {
    const msg = err;
    const status = 'failed';
    return res.json({ status, message: msg });
  });
  return true;
});

router.put('/edit/:id', async (req, res) => {
  const { id } = req.params;
  
  const { fieldsToEdit } = req.body;
  if (!id) return res.send({ error: 'please specify the TeamId and the fieldsToEdit' });
  const previousCategory = await getTeamById(id);
  const newTeam = await editTeam(id, fieldsToEdit);
  if (!newTeam) return res.send({ error: 'please check the team id' });
  return res.send({ new: newTeam, previous: previousCategory });
});

router.get('/count', async (req, res) => {
    const numberTeams = await countTeams();
    if(!numberTeams) {
      const msg = err;
      const status = 'failed';
    }
    return res.json({ numberTeams });
});

export default router;
