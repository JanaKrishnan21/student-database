import {Sequelize} from 'sequelize'
const sequelize=new Sequelize('detail','root','jana2172005',{
    host:'localhost',
    dialect:'mysql',
});
export default sequelize;