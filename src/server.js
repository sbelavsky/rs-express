const { PORT } = require('./common/config');
const app = require('./app');
const { init } = require('./common/db');
const User = require('./resources/users/user.model');
const bcrypt = require('bcrypt');

init().then(db =>
  bcrypt.hash('admin', 8).then(hashed => {
    const admin = new User({
      name: 'admin',
      login: 'admin',
      password: hashed
    });
    db.collection('users')
      .insertOne(admin)
      .then(() => {
        app.listen(PORT, () =>
          console.log(`App is running on http://localhost:${PORT}`)
        );
      });
  })
);
