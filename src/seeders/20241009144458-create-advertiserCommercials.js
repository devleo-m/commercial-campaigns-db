'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('advertiserCommercials', [
      {
        userId: 2,
        name: 'Lorem Ipsum',
        color: 'red',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: 'Commercial Alpha',
        color: 'blue',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        name: 'Commercial Beta',
        color: 'green',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        name: 'Commercial Gamma',
        color: 'yellow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        name: 'Commercial Delta',
        color: 'orange',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        name: 'Commercial Epsilon',
        color: 'purple',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        name: 'Commercial Zeta',
        color: 'pink',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        name: 'Commercial Eta',
        color: 'teal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        name: 'Commercial Theta',
        color: 'cyan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 11,
        name: 'Commercial Iota',
        color: 'magenta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 12,
        name: 'Commercial Kappa',
        color: 'brown',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 13,
        name: 'Commercial Lambda',
        color: 'black',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 14,
        name: 'Commercial Mu',
        color: 'white',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 15,
        name: 'Commercial Nu',
        color: 'gray',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 16,
        name: 'Commercial Xi',
        color: 'beige',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 17,
        name: 'Commercial Omicron',
        color: 'gold',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 18,
        name: 'Commercial Pi',
        color: 'silver',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 19,
        name: 'Commercial Rho',
        color: 'navy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 20,
        name: 'Commercial Sigma',
        color: 'lime',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 21,
        name: 'Commercial Tau',
        color: 'maroon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 22,
        name: 'Commercial Upsilon',
        color: 'coral',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('advertiserCommercials', null, {});
  }
};