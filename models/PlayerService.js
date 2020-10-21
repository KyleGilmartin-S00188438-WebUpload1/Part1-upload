import { Players } from "./PlayerModle";




function ReadPlayers(req, res, option = []) {
    const { Pfname, Plname, Page, Pteam, Pposition, Pwage, Pskill, PweekFoot } = req.query;
    let filter = {};

    if (Pfname) {
        filter.Pfname = { $regex: `^${Pfname}$`, $options: 'i' };
    }

    if (Plname) {
        filter.Plname = { $regex: `^${Plname}$`, $options: 'i' };
    }
    if (Page) { // age of player
        filter.Page = { $regex: `^${Page}$`, $options: 'i' };
    }

    if (Pteam) {
        filter.Pteam = { $regex: `^${Pteam}$`, $options: 'i' };
    }

    if (Pposition) {
        filter.Pposition = { $regex: `^${Pposition}$`, $options: 'i' };
    }
    if (Pwage) {
        filter.Pwage = { $regex: `^${Pwage}$`, $options: 'i' };
    }
    if (Pskill) {
        filter.Pskill = { $regex: `^${Pskill}$`, $options: 'i' };
    }
    if (PweekFoot) {
        filter.PweekFoot = { $regex: `^${PweekFoot}$`, $options: 'i' };
    }
}





function ReadPlayers(req, res, options = []) {
    Players.find()
        .then((result) =>
            res.json(result))
        .catch((error) =>
            res.status(500).json({ error: 'An error' }))
}

function ReadPlayer(req, res) {
    const id = req.params.id;
    Players.findById(id)
        .then((result) =>
            res.json(result))
        .catch((error) =>
            res.status(404).json({ error: 'not found' }))
}

function CreatePlayer(req, res) {
    let PlayerDoc = new Players(req.body);
    PlayerDoc.save()
        .then((result) => {
            console.log('Player saved');
            res.status(201).json({ id: result._id, uri: `/Players/${result.id}` })
        })

    .catch((error) => {
        res.status(412).json({ status: 'fail', message: 'not created' })
    })
    console.log('proising to save');
}

function DeletePlayer(req, res) {
    const id = req.params.id;

    Players.findByIdAndDelete(id)
        .then((result) => {
            if (result) {
                res.status(203).send({ message: 'deleted' })
            } else {
                res.status(404).send({ message: 'not found' })
            }

        })
        .catch((error) =>
            res.status(404).send({ message: 'not found' }));
}

export default { ReadPlayers, ReadPlayer, CreatePlayer, DeletePlayer }