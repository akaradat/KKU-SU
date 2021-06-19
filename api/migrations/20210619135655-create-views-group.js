'use strict';

const view_name = 'view_group_counts';
const query =
  'SELECT `groups`.`id` as group_id, `groups`.`name`, count(`users`.`id`) as total FROM `groups` LEFT JOIN `users` ON `groups`.id = `users`.`group_id` GROUP BY `groups`.`id`';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`CREATE VIEW ${view_name} AS ${query}`);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`DROP VIEW ${view_name}`);
  },
};
