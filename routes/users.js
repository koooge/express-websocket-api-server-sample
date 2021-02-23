const faker = require('faker');

const router = (ws) => {
  const genName = () => {
    ws.send(faker.name.findName());
    setTimeout(genName, 1000);
  };
  genName();
}

module.exports = router;
