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
        trim: '100D',
        year: 2018,
        lease_price: 890,
        purch_price: 78000,
        due_at_sign: 2400,
        lease_term: 24,
        dealership: 'Volkswagen of Oakland',
        details: 'no deals, everyone buys it for full price',
        website: 'https://www.tesla.com/',
        image: 'https://s.aolcdn.com/commerce/autodata/images/USC70TSC024B021001.jpg',
        style: 'Sedan',
        transaction_type: 'lease or purchase',
        expiration_date: '5/31/2018',
        ev: true, 
    },
    {
        make: 'Tesla',
        model: 'Model 3',
        trim: '100D',
        year: 2018,
        lease_price: 890,
        purch_price: 78000,
        due_at_sign: 2400,
        lease_term: 24,
        dealership: 'Volkswagen of Oakland',
        details: 'no deals, everyone buys it for full price',
        website: 'https://www.tesla.com/',
        image: 'https://www.tesla.com/tesla_theme/assets/img/model3/model_3--side_profile.png?20170801',
        style: 'Sedan',
        transaction_type: 'lease or purchase',
        expiration_date: '5/31/2018',
        ev: true, 
    },
    {
        make: 'Tesla',
        model: 'Model X',
        trim: '100D',
        year: 2018,
        lease_price: 890,
        purch_price: 78000,
        due_at_sign: 2400,
        lease_term: 24,
        dealership: 'Volkswagen of Oakland',
        details: 'no deals, everyone buys it for full price',
        website: 'https://www.tesla.com/',
        image: 'https://crdms.images.consumerreports.org/c_lfill,w_555/prod/cars/cr/model-years/7144-2015-tesla-modelx',
        style: 'SUV',
        transaction_type: 'lease or purchase',
        expiration_date: '5/31/2018',
        ev: true, 
    },
    {
        make: 'Honda',
        model: 'Accord',
        trim: 'Sport CVT 2WD',
        year: 2018,
        lease_price: 269,
        purch_price: 0,
        due_at_sign: 999,
        lease_term: 36,
        dealership: 'Honda of Hayward',
        details: 'meh, decent',
        website: 'https://www.hondaofhayward.com/specials/new.htm',
        image: 'https://www.cstatic-images.com/car-pictures/xl/usc80hoc011e021001.png',
        style: 'sedan',
        transaction_type: 'lease or purchase',
        expiration_date: '5/31/2018',
        ev: false, 
    },
    {
        make: 'Lexus',
        model: 'IS 300',
        trim: '',
        year: 2018,
        lease_price: 299,
        purch_price: 0,
        due_at_sign: 3999,
        lease_term: 36,
        dealership: 'Coliseum Lexis of Oakland',
        details: 'meh',
        website: 'https://www.coliseumlexusofoakland.com/LexusOffers_D',
        image: 'https://www.lexus.com/cm-img/all-models/offers/2018/IS.png',
        style: 'sedan',
        transaction_type: 'lease or purchase',
        expiration_date: '5/31/2018',
        ev: false, 
    },
    {
        make: 'Volvo',
        model: 'XC60',
        trim: 'T5',
        year: 2018,
        lease_price: 479,
        purch_price: 0,
        due_at_sign: 3929,
        lease_term: 36,
        dealership: 'McKevitt Volvo Cars',
        details: 'pricey',
        website: 'https://www.mckevittvolvo.com/',
        image: 'https://assets.volvocars.com/us/~/media/us/images/xc60/my18/momentum/volvo-xc60-momentum-trim-v2.jpg?h=1140&la=en-US&w=1140',
        style: 'SUV',
        transaction_type: 'lease or purchase',
        expiration_date: '5/31/2018',
        ev: false, 
    },
]

    // then create new posts again
    Post.create(postList, function(err, res) {
        // console.log('in')
        if (err) {
            console.log('Error creating posts: ', err);
            return;
        }
        console.log('Created ', res.length, ' posts', postList);
        process.exit();
    });