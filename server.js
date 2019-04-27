const app = express()
const staticFileMiddleware = express.static(path.join(__dirname, '/dist'))
app.get('/dong', function (req, res) {
  res.send('hahaha')
})
app.use(staticFileMiddleware)
app.use(history())
app.use(staticFileMiddleware)
// ^ `app.use(staticFileMiddleware)` is included twice as per https://github.com/bripkens/connect-history-api-fallback/blob/master/examples/static-files-and-index-rewrite/README.md#configuring-the-middleware

app.get('/', function (req, res) {
  res.render(path.join(__dirname + 'index.html'))
})


app.listen(5000, function () {
  console.log( 'Express serving on 5000!' )
})
