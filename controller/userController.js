const user = require('../model/userSchema')

module.exports = getUser = async (req) => {
  const _id = req.token_data._id;
  const users = await user.findOne({ _id: _id });
  return {
    error: false,
    sucess: true,
    message: "Get user",
    data: users,
  };
};
