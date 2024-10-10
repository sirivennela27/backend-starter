export class Apiresponse {
  constructor(statuscode, payload, message) {
    this.statuscode = statuscode;
    this.payload = payload;
    this.message = message;
  }
}
