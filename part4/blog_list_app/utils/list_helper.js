const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
    
  let allLikes = 0;
  blogs.forEach((blog) => {
    allLikes += blog.likes;
  });
  return allLikes;
};

const favouriteBlog = (blogs) => {
    if(blogs.length === 0) return null
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

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  favouriteBlogArticle,
};
