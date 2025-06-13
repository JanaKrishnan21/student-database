import {DataTypes} from 'sequelize'
import sequelize from './index.js'

const user1 =sequelize.define('user',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
    allowNull:false,
    },
});
export default user1;