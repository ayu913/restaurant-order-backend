const orderRoutes = (app, fs) => {
    // variables
    const dataPath = './data/order_summary.json';
  
    // READ
    app.get('/order', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = orderRoutes;