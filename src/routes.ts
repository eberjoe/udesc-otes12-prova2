import express from 'express';

const routes = express.Router();

routes.get( "/hello", ( req, res ) => {
  res.send( "Hello world!!" );
} );

export default routes;