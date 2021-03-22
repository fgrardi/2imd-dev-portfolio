const getAll = (req, res) => {
    const username = req.query.user;
    if(username) {
        res.json ({
            "message" : `GETTING message for username ${username}`
        })
    } else {
        res.json ({
            "message" : "GETTING messages"
        })
    }
    
};

const getId = (req, res) => {
    const id = req.params.id;
    res.json({
        "message" : `GETTING message with id ${id}`,
    })
};

const create = (req, res) => {
    //res.send("POSTING a new message for user Pickachu");
    const user = req.params.user;
    res.json({
        "message" : `POSTING a new message for user ${user}`
    })
};

const update = (req, res) => {
    //res.send("UPDATING a message with id ID");
    const id = req.params.id;
    res.json({
        "message" : `UPDATING a message with id ${id}`
    })
};

const remove = (req, res) => {
    const id = req.params.id;
    res.json({
        "message" : `DELETING a message with id ${id}`
    })
};

module.exports.getAll = getAll;
module.exports.getId = getId;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;