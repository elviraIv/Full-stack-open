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
  });

  const blogsAtEnd = helper.blogsInDb;
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length);
});

afterAll(() => {
  mongoose.connection.close();
});
