const dummy = (blogs) => {
    return 1
  }

  const totalLikes = (blogs) => {
      let allLikes = 0;
    blogs.forEach((blog) => {
        
        allLikes += blog.likes

    })
    return allLikes
  }
  
  module.exports = {
    dummy,
    totalLikes
  }