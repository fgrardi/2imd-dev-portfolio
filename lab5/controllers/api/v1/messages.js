const getAll = (req, res) => {
    res.send("GET messages");
};

const getId = (req, res) => {
    res.send("GET messages with id ID");
};

const create = (req, res) => {
    res.send("POSTING a new message for user Pickachu");
};

const update = (req, res) => {
    res.send("UPDATING a message with id ID");
};

const remove = (req, res) => {
    res.send("DELETING a message with id ID");
};

module.exports.getAll = getAll;
module.exports.getId = getId;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;