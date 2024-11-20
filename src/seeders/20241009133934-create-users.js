'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'admin',
        email: 'admin@gmail.com',
        password: "root",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lorem Ipsum',
        email: 'lorem_ipsum@gmail.com',
        password: "root",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John Doe',
        email: 'john_doe@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jane Smith',
        email: 'jane_smith@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alice Johnson',
        email: 'alice_johnson@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bob Brown',
        email: 'bob_brown@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Charlie Davis',
        email: 'charlie_davis@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Diana Garcia',
        email: 'diana_garcia@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ethan Hall',
        email: 'ethan_hall@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fiona Martin',
        email: 'fiona_martin@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'George Lee',
        email: 'george_lee@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hannah Clark',
        email: 'hannah_clark@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Isaac Walker',
        email: 'isaac_walker@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Julia Robinson',
        email: 'julia_robinson@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kevin Young',
        email: 'kevin_young@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Laura Adams',
        email: 'laura_adams@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Michael Scott',
        email: 'michael_scott@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nina Wright',
        email: 'nina_wright@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Oliver Harris',
        email: 'oliver_harris@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Penelope White',
        email: 'penelope_white@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Quincy Moore',
        email: 'quincy_moore@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rachel Green',
        email: 'rachel_green@gmail.com',
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};