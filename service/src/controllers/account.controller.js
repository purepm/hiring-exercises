const catchAsync = require('../utils/catchAsync');

const getAccount = catchAsync(async (req, res) => {
  // id from route param
  console.log(req.params.id);

  // user from JWT token
  console.log(req.user);
  res.send('user account');
});
const getAccountTransactions = catchAsync(async (req, res) => {
  res.send('accountTransactions');
});
const getAccounts = catchAsync(async (req, res) => {
  res.send('accounts');
});

module.exports = {
  getAccount,
  getAccounts,
  getAccountTransactions,
};
