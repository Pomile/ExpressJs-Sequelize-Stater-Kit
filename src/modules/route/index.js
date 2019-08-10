import express from 'express';
// import controllers and helpers and use it in your route handlers
const routes = express.Router();

routes.get(
  '/test',
  (req, res) => {
    res.status(200).json({ status: 200, msg: 'Route module is working perfectly' }).end();
  },
);


export default routes;
