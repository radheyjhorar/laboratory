module.exports = (sequelize, Sequelize) => {
    const customer = sequelize.define("customer", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      leboratory_id: {
        type: Sequelize.INTEGER
      },
      customer_name: {
        type: Sequelize.STRING
      },
      customer_father_name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      mobile1: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.INTEGER
      },
      state: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      
      // is_delete: {
      //   type: Sequelize.BOOLEAN,
      //   defaultValue: 0,
      // }
     
    });
  
    return customer;
  };
  