import app from './app.js';
import { sequelize } from './database/database.js';
// import './models/Project.js'
// import './models/Task.js'

let port = 3060

async function main(){
    try{
        await sequelize.authenticate();
        await sequelize.sync({force: true});
        console.log('Connection has been established succesfully');
        app.listen(3060);
        console.log('Server is running on '+ 3060);
    } catch(err){
        console.log('Unable to connect', err);
    }
}
main();