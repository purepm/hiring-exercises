const roles = ['user', 'admin'];

const roleRights = new Map();
roleRights.set(roles[0], ['getAccount']);
roleRights.set(roles[1], ['getAccounts', 'getUsers', 'manageUsers']);

module.exports = {
  roles,
  roleRights,
};
