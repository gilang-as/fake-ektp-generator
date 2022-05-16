module.exports = (req, res) => {
    const { name = 'Villages' } = req.query;
    res.send(`Hello ${name}!`);
  };