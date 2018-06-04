const express = require('express')
const next = require('next')
const generator = require('./src/util/generator')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const getRoutes = require('./routes');
const routes = getRoutes();
const { parse } = require('url');

app.prepare()
.then(() => {
  const server = express()
  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { title: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/do.it', (req, res) => {
    generator()
    // const actualPage = '/index'
    // const queryParams = {} 
    // app.render(req, res, actualPage, queryParams)
    res.send('hello world')
  })


  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query = {} } = parsedUrl;
    const route = routes[pathname];
    if (route) {
      return app.render(req, res, route.page, query);
    }

    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})