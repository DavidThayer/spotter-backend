const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Post = require('./models/post');

app.use(bodyParser.json());

app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
  });

app.get('/',function(req, res) {
    res.sendFile('views/index.html', { root:__dirname});
});


app.get('/api/posts/?', function index(req, res) {
    // function uppercaseSearch(searchInput) {
    //     let searchInput = req.query
    //     return searchInput[0] = searchInput[0].toUpperCase()
    // }
    let term = {}

    console.log('req.query', req.query)

    if (Object.keys(req.query).length > 0) {
        console.log(req.query)
        let q = (req.query.q).toLowerCase();
        q = q[0].toUpperCase() + q.slice(1)
        let makes = ['Honda', 'Tesla'];
        if (makes.includes(q)) {
        term = {
            make: q
        }
        } else {
            term = {
                model: q
            }
        }
    }
    console.log(22, req.query)
    Post.find(term, function(err, posts) {
        if (err) {
        res.send(err);  
        } else {
        res.json(posts);
    }
    });
})

// app.get('/api/posts', function index(req, res) { 
//     Post.find({}, function(err, posts) {
//         if (err) {
//             res.send(err);  
//         } else {
//         // console.log(posts)
//         res.json(posts);
//         }
//     });
// })


app.post('/api/posts', function(req, res) {
    Post.create(req.body, function (err, post) {
        if (err) res.send(err);
        else return res.json(post);
    });
});

let port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`Listening on port ${ port }`);
});