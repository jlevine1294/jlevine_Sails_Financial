/**
 * Stock.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    symbol: {
      type: 'string',
      required: true
    },

    name: {
      type: 'string'
    },


    number_of_shares: {
      type: 'float',
      required: true
    },

    purchase_price: {
      type: 'float'
    },

    date: {
      type: 'string'
    },

    owner: {
      model: 'customer',
      required: true
    }
  }

};

