module.exports = (sequelize, Sequelize) => {
  const Result = sequelize.define('result', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    value: { type: Sequelize.INTEGER, allowNull: false },

    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  });

  return Result;
};
