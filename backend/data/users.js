import bcrypt from "bcryptjs";

const users = [
  {
    name: "AdminUser",
    email: "adminuser@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Het Shah",
    email: "het@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Hetav Shah",
    email: "hetav@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
