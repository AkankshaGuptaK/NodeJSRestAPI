exports.getPosts = (req, res, next) => {
  res.status(200).json({
    post: [{ title: "First Post", content: "This is the first Post" }],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  //create post in DB
  re.status(201).json({
    message: "Post created successfully",
    post: {
      id: new Date().toISOString(),
      title: title,
      content: content,
    },
  });
};
