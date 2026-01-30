'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('themes', [
      { name: 'Accueil au centre', createdAt: new Date() },
      { name: 'Qualité des soins', createdAt: new Date()},
      { name: 'Traitement de la part du personnel non-soignant', createdAt: new Date()},
      { name: 'Bien-être et sécurité', createdAt: new Date()},
      { name: 'Propreté et confort', createdAt: new Date()},
      { name: 'Alimentation', createdAt: new Date()},
    ]);

    await queryInterface.bulkInsert('questions', [
      { content: 'A combien noteriez-vous l\'accueil lors de votre arrivée au centre, sur une échelle de 1 à 5 ?', theme_id: 1, is_active: true, createdAt: new Date() },
      { content: 'A combien noteriez-vous la clarté des informations fournies lors de l\'admission, sur une échelle de 1 à 5 ?', theme_id: 1, is_active: true, createdAt: new Date() },
      { content: 'A combien noteriez-vous le temps entre votre demande d\'admission et votre entrée, sur une échelle de 1 à 5 ?', theme_id: 1, is_active: true, createdAt: new Date() },

      { content: 'A combien noteriez-vous la qualité globale des soins de rééducation, sur une échelle de 1 à 5 ?', theme_id: 2, is_active: true, createdAt: new Date() },
      { content: 'A combien noteriez-vous les compétences des thérapeutes (kinésithérapeutes, ergothérapeutes, etc.), sur une échelle de 1 à 5 ?', theme_id: 2, is_active: true, createdAt: new Date() },
      { content: 'A combien noteriez-vous l\'adaptation des exercices à votre état de santé, sur une échelle de 1 à 5 ?', theme_id: 2, is_active: true, createdAt: new Date() },
      { content: 'A combien noteriez-vous le suivi de votre progression par l\'équipe, sur une échelle de 1 à 5 ?', theme_id: 2, is_active: true, createdAt: new Date() },
      { content: 'A combien noteriez-vous la préparation à votre sortie (conseils, documents, suivi), sur une échelle de 1 à 5 ?', theme_id: 2, is_active: true, createdAt: new Date() },

      { content: 'A combien noteriez-vous la disponibilité du personnel soignant lorsque vous en aviez besoin, sur une échelle de 1 à 5 ?', theme_id: 3, is_active: true, createdAt: new Date() },
      { content: 'A combien noteriez-vous l\'amabilité et courtoisie du personnel, sur une échelle de 1 à 5 ?', theme_id: 3, is_active: true, createdAt: new Date() },

      { content: 'A combien noteriez-vous l\'écoute de vos besoins et prise en compte de vos remarques durant votre séjour, sur une échelle de 1 à 5 ?', theme_id: 4, is_active: true, createdAt: new Date() },
      { content: 'A combien noteriez-vous le respect de votre dignité et de votre intimité, sur une échelle de 1 à 5 ?', theme_id: 4, is_active: true, createdAt: new Date() },

      { content: 'A combien noteriez-vous le confort de votre chambre, sur une échelle de 1 à 5 ?', theme_id: 5, is_active: true, createdAt: new Date() },
      { content: 'A combien noteriez-vous la propreté de votre chambre et des locaux, sur une échelle de 1 à 5 ?', theme_id: 5, is_active: true, createdAt: new Date() },

      { content: 'A combien noteriez-vous la qualité des repas servis, sur une échelle de 1 à 5 ?', theme_id: 6, is_active: true, createdAt: new Date() },
      
    ]);

    await queryInterface.bulkInsert('centers', [
      { 
        id: Sequelize.literal('gen_random_uuid()'),
        name: 'Centre de Rééducation du Louvre',
        city: 'Lyon',
        postal_code: '69006',
        address: '22 avenue du Parc',
        createdAt: new Date()
      },
      { 
        id: Sequelize.literal('gen_random_uuid()'),
        name: 'Clinique du Parc',
        city: 'Paris',
        postal_code: '75001',
        address: '15 rue du Louvre',
        createdAt: new Date()
      },
      { 
        id: Sequelize.literal('gen_random_uuid()'),
        name: 'Centre Saint-Charles',
        city: 'Marseille',
        postal_code: '13002',
        address: '8 rue Saint-Charles',
        createdAt: new Date()
      },
      { 
        id: Sequelize.literal('gen_random_uuid()'),
        name: 'Institut de Réadaptation Atlantique',
        city: 'Nantes',
        postal_code: '44000',
        address: '3 allée des Dunes',
        createdAt: new Date()
      },
      { 
        id: Sequelize.literal('gen_random_uuid()'),
        name: 'Centre Val d’Oise Santé',
        city: 'Cergy',
        postal_code: '95000',
        address: '12 rue des Lilas',
        createdAt: new Date()
      },
      { 
        id: Sequelize.literal('gen_random_uuid()'),
        name: 'Clinique du Littoral',
        city: 'Nice',
        postal_code: '06000',
        address: '5 promenade des Plages',
        createdAt: new Date()
      },
      { 
        id: Sequelize.literal('gen_random_uuid()'),
        name: 'Centre de Rééducation Pasteur',
        city: 'Strasbourg',
        postal_code: '67000',
        address: '10 avenue Pasteur',
        createdAt: new Date()
      },
      { 
        id: Sequelize.literal('gen_random_uuid()'),
        name: 'Centre Sud Santé',
        city: 'Montpellier',
        postal_code: '34000',
        address: '18 rue du Midi',
        createdAt: new Date()
      },
      { 
        id: Sequelize.literal('gen_random_uuid()'),
        name: 'Centre de Réadaptation Victor Hugo',
        city: 'Bordeaux',
        postal_code: '33000',
        address: '7 rue Victor Hugo',
        createdAt: new Date()
      },
      { 
        id: Sequelize.literal('gen_random_uuid()'),
        name: 'Centre Normandie Mouvement',
        city: 'Caen',
        postal_code: '14000',
        address: '2 rue de la Liberté',
        createdAt: new Date()
      },
    ]);

    await queryInterface.bulkInsert('specialties', [
      { name: 'Kinésithérapie', createdAt: new Date()},
      { name: 'Rééducation neurologique', createdAt: new Date()},
      { name: 'Rééducation orthopédique', createdAt: new Date()},
      { name: 'Ergothérapie', createdAt: new Date()},
      { name: 'Balnéothérapie', createdAt: new Date()},
      { name: 'Réentrainement à l\’effort', createdAt: new Date()},
      { name: 'Suivi post-opératoire', createdAt: new Date()},
    ]);

    const specialties = await queryInterface.sequelize.query(
      'SELECT id FROM specialties;',
      { type: Sequelize.QueryTypes.SELECT }
    );
    const specialtyIds = specialties.map(s => s.id);
    const maxSpecialties = specialtyIds.length;

    const centers = await queryInterface.sequelize.query(
      'SELECT id FROM centers;',
      { type: Sequelize.QueryTypes.SELECT }
    );

    const centerSpecialties = [];
    centers.forEach(center => {
      const minSpecialties = 2;
      const numSpecialties = maxSpecialties < minSpecialties 
        ? maxSpecialties 
        : Math.floor(Math.random() * (maxSpecialties - minSpecialties + 1)) + minSpecialties;
      const shuffled = [...specialtyIds].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, numSpecialties);
      selected.forEach(specialtyId => {
        centerSpecialties.push({
          center_id: center.id,
          specialty_id: specialtyId,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      });
    });

    await queryInterface.bulkInsert('center_specialties', centerSpecialties);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('center_specialties', null, {});
    await queryInterface.bulkDelete('specialties', null, {});
    await queryInterface.bulkDelete('centers', null, {});
    await queryInterface.bulkDelete('questions', null, {});
    await queryInterface.bulkDelete('themes', null, {});
  }
};