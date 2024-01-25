const mongoose = require('mongoose');

// Connexion à la base de données
mongoose.connect('mongodb://localhost:27017/ma_base_de_donnees', { useNewUrlParser: true, useUnifiedTopology: true });

// Définition du schéma de votre modèle
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

// Définition du modèle
const User = mongoose.model('User', userSchema);

async function performAtomicOperations() {
  const session = await mongoose.startSession();

  try {
    // Début de la transaction
    session.startTransaction();

    // Exécution des opérations dans la transaction
    const user1 = new User({ name: 'John Doe', email: 'john@example.com' });
    await user1.save({ session });

    const user2 = new User({ name: 'Jane Smith', email: 'jane@example.com' });
    await user2.save({ session });

    // Validation de la transaction
    await session.commitTransaction();
    console.log('Transactions effectuées avec succès !');
  } catch (error) {
    // Annulation de la transaction en cas d'erreur
    await session.abortTransaction();
    console.error('Erreur lors de l\'exécution des transactions :', error);
  } finally {
    // Fermeture de la session
    session.endSession();
  }
}

// Appel de la fonction pour effectuer les opérations atomiques
performAtomicOperations().catch(console.error);
