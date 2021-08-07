const express = require( "express" );
const app = express();
const port = 8080; // porta default

// defina uma rota para a Home
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// inicializa o servidor Express
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );