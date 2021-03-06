import express from 'express';
import * as person from '../controllers/person';

const router = express.Router();

router.route('/user')
  .get(person.single);

router.route('/user/badges')
  .get(person.badges);

router.route('/user/updates')
  .get(person.updates);

router.route('/user/balance')
  .get(person.balance);

export default router;
