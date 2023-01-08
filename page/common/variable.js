const Myfunctions = require("./functions");
module.exports = {
  email: "hungyeuai195@gmail.com",
  password: "Hungyeuai1@",
  companyName: "NHOM7" + Myfunctions.randomNumber(1, 100),
  website: "https://" + "NHOM7" + Myfunctions.randomString(3) + ".com.vn",
  apiKey:
    "API KEY" + Myfunctions.randomNumber(1, 100) + Myfunctions.randomString(3),
  editNameApiKey:
    "Edit" + Myfunctions.randomNumber(1, 100) + Myfunctions.randomString(3),
};
