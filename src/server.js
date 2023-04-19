const Hapi = require('@hapi/hapi');
//const routes = require('./routes');
const notes = require('./api/notes');
const NotesService = require('./services/inMemory/NotesService');
 
const init = async () => {
  const NotesService = new NotesService();
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
 
  //server.route(routes); dihapus sma importny karena tidak perlu
  await server. register({
    plugins: notes,
    options: {
      service: NotesService,
    },
  });
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
/*Berkas ini menampung kode untuk membuat, mengonfigurasi, dan menjalankan HTTP server menggunakan Hapi.
Berkas server.js ini memiliki ketergantungan terhadap berkas routes.js.*/