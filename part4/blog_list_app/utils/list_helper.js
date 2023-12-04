const lodash = require("lodash");

const totalLikes = (blogs) => {
  let allLikes = 0;
  blogs.forEach((blog) => {
    allLikes += blog.likes;
  });
  return allLikes;
};

const favouriteBlog = (blogs) => {
  if (blogs.length === 0) return null;
  return Math.max(...blogs.map((blog) => blog.likes));
};
const favouriteBlogArticle = (blogs) => {
  if (blogs.length === 0) return null;

  const mostLikedBlog = blogs.reduce((prevValue, currentValue) => {
    return prevValue.likes > currentValue.likes ? prevValue : currentValue;
  });

  return {
    title: mostLikedBlog.title,
    author: mostLikedBlog.author,
    likes: mostLikedBlog.likes,
  };
};

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null;

  const authorsCount = lodash.countBy(blogs, "author");
  const topAuthor = Object.keys(authorsCount).reduce((prev, cur) => {
    return authorsCount[prev] > authorsCount[cur] ? prev : cur;
  });

  return {
    author: topAuthor,
    blogs: authorsCount[topAuthor],
  };
};

const mostLikes = (blogs) => {
  if (blogs.length === 0) return null;

  const likesCount = lodash(blogs)
    .groupBy("author")
    .map((obj, key) => ({
      author: key,
      likes: lodash.sumBy(obj, "likes"),
    }))
    .value();

  return likesCount.reduce((prev, cur) => {
    return prev.likes > cur.likes ? prev : cur;
  });
};

module.exports = {
  totalLikes,
  favouriteBlog,
  favouriteBlogArticle,
  mostBlogs,
  mostLikes
};
