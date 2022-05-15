// Update with your config settings.

module.exports = {
    development: {
        client: 'mysql',
        debug: true,
        connection: {
            host : '127.0.0.1',
            port : 3306,
            user : 'root', // change this to your mysql username
            password : 'password', //change this to your mysql password
            insecureAuth: true,
            database : 'db'
        }
    }
};
