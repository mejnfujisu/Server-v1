module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define("booking", {
      customer_name: {
        type: Sequelize.STRING
      },
      hotel_name: {
        type: Sequelize.STRING
      },
    });
  
    return Booking;
  };
  