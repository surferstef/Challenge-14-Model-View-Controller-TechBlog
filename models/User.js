const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create User model

class User extends Model {}

User.init(
        {
            // define columns
            id: {
                 type: DataTypes.INTEGER,
                 allowNull: false,
                 primaryKey: true,
                 autoIncrement: true
                },
            
             username: {
                 type: DataTypes.STRING,
                 allowNull: false
             },
             email: {
                 type: DataTypes.STRING,
                 allowNull: false,
                 unique: true,
                 validate: {
                     isEmail: true
                 }
             },
             password: {
                 type: DataTypes.STRING,
                 allowNull: false,
                 validate: {
                     len: [8]
                 }
             }
        },
        {
              // pass in our imported sequelize connection (the direct connection to our database)
             sequelize,
             // don't automatically create createdAt/updatedAt timestamp fields
             timestamps: false,
             // don't pluralize name of database table
             freezeTableName: true,
            // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
            underscored: true,
             // make it so our model name stays lowercase in the database
            modelName: 'user'
          }
    )
    
    module.exports = User;
