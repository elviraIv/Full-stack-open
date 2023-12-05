const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const helper = require("./test_helper");
const Blog = require("../models/blog");

beforeEach(async () => {
  await Blog.deleteMany({});
  await Blog.insertMany(helper.initialBlogs);
});

describe("adding a new blog post", () => {
  test("should add a new blog post ", async () => {
    const newBlog = {
      title: "a test title",
      author: "a test author",
      url: "https://test.com",
      likes: 3,
    };

    await api
      .post("/api/blogs")
      .send(newBlog)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const blogsAtEnd = await helper.blogsInDb;
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1);

    const titles = blogsAtEnd.map((blog) => blog.title);
    expect(title).toContain("a test blog");
  });
  test("should return status 400 if title and url are missing", async () => {
    const newBlog = {
      likes: 1,
    };

    await api.post("/api/blogs").send(newBlog).expect(400);
    const blogsAtEnd = helper.blogsInDb;
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length);
  });
});

describe("deletion of a blog post", async () => {
  beforeEach(async () => {
    await Blog.deleteMany({});

    const newBlog = {
      title: "some title",
      author: "some author",
      url: "https://example.com",
    };

    await api
      .post("/api/blogs")
      .send(newBlog)
      .expect(201)
      .expect("Content-Type", /application\/json/);
  });

  test("should succeed with status 204 if id is valid", async () => {
    const blogsAtStart = helper.blogsInDb;
    const blogToDelete = blogsAtStart[0];

    await api.delete(`api/blogs/${blogToDelete.id}`).expect(204);

    const blogsAtEnd = await Blog.find({}).populate("user");
    expect(blogsAtEnd).toHaveLength(blogsAtStart.length - 1);

    const titles = blogsAtEnd.map((blog) => blog.title);
    expect(titles).not.toContain(blogToDelete.title);
  });

  
});

afterAll(() => {
  mongoose.connection.close();
});
