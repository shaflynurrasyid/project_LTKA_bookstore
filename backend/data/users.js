import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Shafly Nurrasyid',
    email: 'mshaflyn24@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Muhammad Akbar',
    email: 'makbar@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Aulia Azhar',
    email: 'auliaazhar@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
