module.exports = (req, res) => {
    const { name = 'Regencies' } = req.query;
    res.send(`Hello ${name}!`);
  };