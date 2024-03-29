import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getChampions = (req, res) => {
    prisma.champion.findMany()
    .then((champions) => {
        res.json(champions);
    })
    .catch((error) => {
        res.json({ error: error });
    });
};

const getChampion = (req, res) => {
    let id = Number(req.params.id);
    prisma.champion.findUnique({
        where: {
            id: id
        }
    })
    .then((champion) => {
        res.json(champion);
    })
    .catch((error) => {
        res.json({ error: error });
    });
};

const createChampion = (req, res) => {
    let champion = req.body;
    console.log(champion);

    prisma.champion.create({
        data: {
            name: champion.name
            
        }
    })
    .then((champion) => {
        res.json(champion);
    })
    .catch((error) => {
        res.json({ error: error });
    });
};

const updateChampion = (req, res) => {
    let id = Number(req.params.id);
    let champion = req.body;

    prisma.champion.update({
        where: {
            id: id
        },
        data: {
            name: champion.name
        }
    })
    .then((champion) => {
        res.json(champion);
    })
    .catch((error) => {
        res.json({ error: error });
    });
};

const deleteChampion = (req, res) => {
    let id = Number(req.params.id);
    prisma.champion.delete({
        where: {
            id: id
        }
    })
    .then((champion) => {
        res.json(champion);
    })
    .catch((error) => {
        res.json({ error: error });
    });
};

export { getChampions, getChampion, createChampion, updateChampion, deleteChampion };
