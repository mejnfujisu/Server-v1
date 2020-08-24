module.exports = (sequelize, Sequelize) => {
    const Hotel = sequelize.define("hotel", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
    });
  
    return Hotel;
  };
  