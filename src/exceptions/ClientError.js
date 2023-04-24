class ClientError extends Error {
    constructor(message, statusCode = 400) {
      super(message);
/**Di dalam constructor, panggil fungsi super dengan membawa nilai message; inisialisasi nilai code pada this.statusCode;
tetapkan this.name dengan nilai “ClientError” */
      this.statusCode = statusCode;
      this.name = 'ClientError';
    }
  }
   
  module.exports = ClientError;