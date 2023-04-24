const InvariantError = require('../../exceptions/InvariantError');
const { NotePayloadSchema } = require('./schema');
const NotesValidator = {
  validateNotePayload: (payload) => {
    const validationResult = NotePayloadSchema.validate(payload);
    if (validationResult.error) {
        //mengubah penerapan eror
        throw new InvariantError(validationResult.error.message);
    }
  },
};
module.exports = NotesValidator;