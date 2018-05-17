const express = require('express');
const morgan = require('morgan');

const app = express();


app.use(morgan('common'));
<<<<<<< HEAD

// you need to import `blogPostsRouter` router and route
// requests to HTTP requests to `/blog-posts` to `blogPostsRouter`

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
=======
const BlogRouter = require('./blogPostsRouter');
// you need to import `blogPostsRouter` router and route
// requests to HTTP requests to `/blog-posts` to `blogPostsRouter`
app.use('/blog-posts', BlogRouter);
app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
>>>>>>> 08649127535859eb6ee5e26f86089580d9a69a76
