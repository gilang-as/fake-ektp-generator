module.exports = (req, res) => {
    const { name = 'Provinces' } = req.query;
    res.send(`Hello ${name}!`);
  };