import express from "express";
import routerLogin from './controllers/loginController.js'
import routerUser from "./controllers/userController.js";
import routerPassword from "./controllers/passwordController.js";
import gasStation from "./controllers/gasStationController.js"

const routes = express();

routes.use('/login', routerLogin);
routes.use('/user', routerUser);
routes.use('/password', routerPassword);
routes.use('/station', gasStation);


export default routes;