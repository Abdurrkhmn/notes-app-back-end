const { nanoid } = require('nanoid');
const id = nanoid(16);

const notes = require('./notes');

const addNoteHandler = (request, h) => {
  //menyimpan catatan
    const { title, tags, body } = request.payload;
  //logika untuk menyimpan catatan
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    
    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    };

    notes.push(newNote);
    //menentukan apakah newNote sudah masuk ke dalam array
    const isSuccess = notes.filter((note) => note.id === id).length > 0;
    if (isSuccess) {
        const response = h.response({
          status: 'success',
          message: 'Catatan berhasil ditambahkan',
          data: {
            noteId: id,
          },
        });
        response.code(201);
        return response;
      }
      const response = h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
      });
      response.code(500);
      return response;
    };
    //menampilkan catatan 
    //Anda juga tidak perlu menuliskanparameter 
    //request dan h karena ia tidak digunakan.
    const getAllNotesHandler = () => ({
      status: 'success',
      data: {
        notes,
      },
    });
    //Di dalam fungsi ini kita harus mengembalikan objek catatan 
    //secara spesifik berdasarkan id yang digunakan oleh path parameter.
    const getNoteByIdHandler = (request, h) => {
      const { id } = request.params;
      const note = notes.filter((n) => n.id === id)[0];
      if (note !== undefined) {
        return {
          status: 'success',
          data: {
            note,
          },
        };
      }
      const response = h.response({
        status: 'fail',
        message: 'Catatan tidak ditemukan',
      });
      response.code(404);
      return response;
    };
    //mengubah catatan
    const editNoteByIdHandler = (request, h) => {
      const { id } = request.params;
      //kita dapatkan data notes terbaru yang
      //dikirimkan oleh client melalui body request.
      const { title, tags, body } = request.payload;
      const updatedAt = new Date().toISOString();
      const index = notes.findIndex((note) => note.id === id);
      if (index !== -1) {
        notes[index] = {
          ...notes[index],
          title,
          tags,
          body,
          updatedAt,
        };
        const response = h.response({
          status: 'success',
          message: 'Catatan berhasil diperbarui',
        });
        response.code(200);
        return response;
      }
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui catatan. Id tidak ditemukan',
      });
      response.code(404);
      return response;
     };
     /*Spread operator pada kode
      di atas digunakan untuk mempertahankan nilai */
     const deleteNoteByIdHandler = (request, h) => {
      //menghapus catatan
      const { id } = request.params;
      const index = notes.findIndex((note) => note.id === id);
     //dapatkan index dari objek catatan sesuai dengan id yang didapat
      if (index !== -1) {
        notes.splice(index, 1);
        const response = h.response({
          status: 'success',
          message: 'Catatan berhasil dihapus',
        });
        response.code(200);
        return response;
      }
      const response = h.response({
        status: 'fail',
        message: 'Catatan gagal dihapus. Id tidak ditemukan',
      });
      response.code(404);
      return response;
     };
    
module.exports = { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler };

/*Masing-masing fungsi handler akan menangani request secara spesifik, serta mengelola data catatan yang diambil/disimpan dari/ke array notes yang berada pada berkas notes.js.
*/