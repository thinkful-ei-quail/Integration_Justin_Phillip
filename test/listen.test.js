const { app, PORT } = require('../server');

describe(`App listens to port ${PORT}`, () => {
  it('should listen', () => {
    // TODO: This is a placeholder for confirming that the server.js is actually listening.
    return console.log(`Test stuffs ${PORT}`);
    
  })
});