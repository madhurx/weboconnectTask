const User = require('./user');
const Post = require('./post');
const Like = require('./like');
const Follow = require('./follow');

// Define associations
User.hasMany(Post, { as: 'posts', foreignKey: 'userId' });
User.hasMany(Like, { as: 'userLikes',foreignKey: 'userId' });
User.hasMany(Follow, { as: 'followerRelations', foreignKey: 'followerId' });
User.hasMany(Follow, { as: 'followingRelations', foreignKey: 'followingId' });

// Post.belongsTo(User, { as: 'author', foreignKey: 'userId' });
Post.hasMany(Like, { as: 'postLikes' ,foreignKey: 'postId'});

// Like.belongsTo(User, { as: 'liker', foreignKey: 'userId' });
// Like.belongsTo(Post, { as: 'likedPost', foreignKey: 'postId' });

// Follow.belongsTo(User, { as: 'follower', foreignKey: 'followerId' });
// Follow.belongsTo(User, { as: 'following', foreignKey: 'followingId' });

module.exports = { User, Post, Like, Follow };
