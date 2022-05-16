module.exports = (req, res) => {
    const { name = 'Districts' } = req.query;
    res.send(`Hello ${name}!`);
  };