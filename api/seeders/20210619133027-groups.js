'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const datas = alphabet.reduce((acc, ch) => {
      acc.push({ name: ch, created_at: now, updated_at: now });
      return acc;
    }, []);
    return queryInterface.bulkInsert('groups', datas, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
};
