import { PrismaClient } from "@prisma/client";
import fs from "fs"; // Importation du module fs pour lire le fichier JSON

const prisma = new PrismaClient();

async function seed() {
  try {
    const jsonData = fs.readFileSync("./champions.json", "utf-8"); // Lecture du fichier JSON
    const championsData = JSON.parse(jsonData);

    await Promise.all( // Promise.all permet d'attendre que toutes les promesses soient résolues
      championsData.map((champion) => {
        return prisma.champion.create({
          data: champion,
        });
      })
    );

    console.log("Champions ajoutés avec succès.");
  } catch (error) {
    console.error("Erreur lors de l'ajout des champions :", error);
  } finally {
    await prisma.$disconnect(); // Déconnexion de la base de données
  }
}

seed();

export default seed;
