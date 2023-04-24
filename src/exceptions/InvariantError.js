const ClientError = require('./ClientError');
 
class InvariantError extends ClientError {
  constructor(message) {
    super(message);
    this.name = 'InvariantError';
  }
}
 
module.exports = InvariantError;
/**Note:Karena InvariantError memiliki status code 400, maka kita tidak perlu menetapkan status code di sini. Sebab secara default, 
 turunan ClientError akan memiliki nilai status code 400. */