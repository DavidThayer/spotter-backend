const Post = require('../models/post')

// remove posts 
Post.remove({}, function(err, res) {
    if (err) {
        console.log('Error removing posts: ', err);
        return;
    }
    console.log('Removed all posts')
});
    
let postList = 
[
    {
        make: 'Tesla',
        model: 'Model S',
        lease_price: 890,
        purch_price: 78000,
        details: 'no deals, everyone buys it for full price',
        website: 'https://www.tesla.com/',
        image: 'https://s.aolcdn.com/commerce/autodata/images/USC70TSC024B021001.jpg',
        style: 'Sedan',
        transaction_type: 'lease or purchase',
        ev: true, 
    },
    {
        make: 'Tesla',
        model: 'Model 3',
        lease_price: 890,
        purch_price: 78000,
        details: 'no deals, everyone buys it for full price',
        website: 'https://www.tesla.com/',
        image: 'https://www.tesla.com/tesla_theme/assets/img/model3/model_3--side_profile.png?20170801',
        style: 'Sedan',
        transaction_type: 'lease or purchase',
        ev: true, 
    },
]

    // then create new posts again
    Post.create(postList, function(err, res) {
        console.log('in')
        if (err) {
            console.log('Error creating posts: ', err);
            return;
        }
        console.log('Created ', res.length, ' posts');
        process.exit();
    });