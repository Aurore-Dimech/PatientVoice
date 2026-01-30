const Center = require('./Center');
const Specialty = require('./Specialty');

Center.belongsToMany(Specialty, {
  through: 'center_specialties',
  foreignKey: 'center_id',
  otherKey: 'specialty_id',
  as: 'specialties'
});

Specialty.belongsToMany(Center, {
  through: 'center_specialties',
  foreignKey: 'specialty_id',
  otherKey: 'center_id',
  as: 'centers'
});