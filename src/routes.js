const { 
  addNoteHandler, 
  getAllNotesHandler, 
  getNoteByIdHandler, 
  editNoteByIdHandler, 
  deleteNoteByIdHandler
       } = require('./handler');
const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,//impor fungsinya
      },
      {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler, //impor fungsinya
      },
      {
        //membuat route untuk mendapatkan catatan secara spesifik. 
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler, //impor fungsinya
      },
      {
       method: 'PUT',
      path: '/notes/{id}',
      handler: editNoteByIdHandler, //impor fungsinya
      },
      {
        method: 'DELETE',
        //menghapus catatan
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler, //impor fungsinya
      },
  ];
   
  module.exports = routes;
  
  /*Seperti yang Anda lihat, untuk fungsi handler pada berkas routes.js di ambil dari berkas handler.js.
  Tentu, seluruh logika dalam request handling ada di berkas ini handler.js*/