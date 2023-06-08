https://chat.openai.com/share/8a24692a-c698-4e40-9bac-557ef88acce4

npm install koa koa-router koa-bodyparser pg knex

<!--  -->

module.exports = {
development: {
client: 'pg',
connection: {
host: 'localhost',
user: 'your_username',
password: 'your_password',
database: 'your_database',
},
migrations: {
directory: './db/migrations',
},
seeds: {
directory: './db/seeds',
},
},
};

<!--  -->

npx knex --knexfile knexfile.js migrate:make create_users_table
