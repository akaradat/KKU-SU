import DB from '@/databases';
class HackerBoiException extends Error {
  public status = 208;
  public message = 'WELCOME TO KKU HACKER BOI. IF YOU WANT SOMETHING MORE INTERESTING CONTACT ME AT ...';

  constructor() {
    super();
    DB.sequelize.query(`INSERT INTO bois VALUES ();`);
  }
}

export default HackerBoiException;
