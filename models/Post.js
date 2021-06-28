const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create Post Model
class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.String,
            allowNull: false
        },
        post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
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
);

module.exports = Post;