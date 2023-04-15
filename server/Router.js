import {Router} from "express";

import * as controller from './Controller.js'

const router = Router();

router.route('/checkuser').post(controller.checkuser)

export default router;