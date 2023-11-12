// Create web server
// Create Web Server
const express = require('express');
const app = express();
const port = 3000;

// Use Middlewares
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
app.use(helmet());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

// Use View Engine
app.set('view engine', 'pug');
app.set('views', './views');

// Use Router
const indexRouter = require('./routes/index');
const topicRouter = require('./routes/topic');
const authRouter = require('./routes/auth');
const commentRouter = require('./routes/comment');
app.use('/', indexRouter);
app.use('/topic', topicRouter);
app.use('/auth', authRouter);
app.use('/comment', commentRouter);

// Use Error Handler
const errorHandler = require('express-error-handler');
const errorHandlerOption = {
  static: { '404': './public/404.html' },
};
app.use(errorHandler(errorHandlerOption));

// Listen Web Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});