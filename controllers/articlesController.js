export const getArticles = (req, res) => {
    res.send({test:"test"});
};

export const addArticles = (req, res) => {
    console.log(req);
    res.send(req.body);
};