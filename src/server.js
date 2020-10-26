const { PORT } = require('./common/config');
const app = require('./app');
const { init } = require('./common/db');

init().then(() =>
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  )
);
