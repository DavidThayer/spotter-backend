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
        trim: '75D',
        year: 2018,
        lease_price: 900,
        purch_price: 0,
        due_at_sign: 6595,
        lease_term: 36,
        dealership: 'Tesla of Walnut Creek',
        details: 'no deals, everyone buys it for full price',
        website: 'https://www.tesla.com/',
        image: 'https://s.aolcdn.com/commerce/autodata/images/USC70TSC024B021001.jpg',
        style: 'Sedan',
        transaction_type: 'lease or purchase',
        expiration_date: '6/1/2018',
        ev: true, 
    },
    {
        make: 'Tesla',
        model: 'Model 3',
        trim: '75D',
        year: 2018,
        lease_price: 890,
        purch_price: 35000,
        due_at_sign: 5000,
        lease_term: 36,
        dealership: 'Tesla of Walnut Creek',
        details: 'no deals, everyone buys it for full price',
        website: 'https://www.tesla.com/',
        image: 'https://www.tesla.com/tesla_theme/assets/img/model3/model_3--side_profile.png?20170801',
        style: 'Sedan',
        transaction_type: 'purchase',
        expiration_date: '6/1/2018',
        ev: true, 
    },
    {
        make: 'Tesla',
        model: 'Model X',
        trim: '75D',
        year: 2018,
        lease_price: 992,
        purch_price: 0,
        due_at_sign: 6687,
        lease_term: 36,
        dealership: 'Tesla of Walnut Creek',
        details: 'no deals, everyone buys it for full price',
        website: 'https://www.tesla.com/',
        image: 'https://crdms.images.consumerreports.org/c_lfill,w_555/prod/cars/cr/model-years/7144-2015-tesla-modelx',
        style: 'SUV',
        transaction_type: 'lease',
        expiration_date: '6/1/2018',
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
        expiration_date: '6/1/2018',
        ev: false, 
    },
    {
        make: 'Tesla',
        model: 'Vanessas Roadster',
        trim: 'P100D',
        year: 2019,
        lease_price: 3500,
        purch_price: 250000,
        due_at_sign: 50000,
        lease_term: 36,
        dealership: 'Tesla of Walnut Creek',
        details: 'no deals, everyone buys it for full price',
        website: 'https://www.tesla.com/',
        image: 'https://www.tesla.com/sites/default/files/images/roadster/roadster-social.jpg',
        style: 'Sedan',
        transaction_type: 'purchase',
        expiration_date: '6/1/2018',
        ev: true, 
    },
    {
        make: 'Tesla',
        model: 'Faisals Semi',
        trim: 'P100D',
        year: 2019,
        lease_price: 3500,
        purch_price: 250000,
        due_at_sign: 50000,
        lease_term: 36,
        dealership: 'Tesla of Walnut Creek',
        details: 'no deals, everyone buys it for full price',
        website: 'https://www.tesla.com/',
        image: 'https://cdn.images.express.co.uk/img/dynamic/24/590x/Tesla-Semi-truck-956566.jpg',
        style: 'Semi',
        transaction_type: 'purchase',
        expiration_date: '6/1/2018',
        ev: true, 
    },
    {
        make: 'Tesla',
        model: 'Kennys Roadster',
        trim: '',
        year: 2010,
        lease_price: 3500,
        purch_price: 120000,
        due_at_sign: 5000,
        lease_term: 36,
        dealership: 'Tesla of Venus',
        details: 'no deals, everyone buys it for full price',
        website: 'https://www.tesla.com/',
        image: 'https://3bonlp1aiidtbao4s10xacvn-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/What-Could-Possibly-Happen-to-Elon-Musks-Tesla-Roadster-in-Space.jpg',
        style: 'Rocket',
        transaction_type: 'purchase',
        expiration_date: '6/1/2018',
        ev: true, 
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
        expiration_date: '6/1/2018',
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
        expiration_date: '6/1/2018',
        ev: false, 
    }, 
    {
        make: 'Toyota',
        model: 'Camry',
        trim: 'LE',
        year: 2018,
        lease_price: 209,
        purch_price: 0,
        due_at_sign: 1999,
        lease_term: 36,
        dealership: 'Toyota',
        details: 'meh',
        website: 'https://www.toyota.com/local-specials/',
        image: 'https://media.ed.edmunds-media.com/toyota/camry-se/2018/fd/2018_toyota_camry-se_f34_fd_620172_717.jpg',
        style: 'sedan',
        transaction_type: 'lease',
        expiration_date: '6/1/2018',
        ev: false, 
    },
    {
        make: 'Toyota',
        model: 'Prius',
        trim: 'One',
        year: 2018,
        lease_price: 279,
        purch_price: 0,
        due_at_sign: 2399,
        lease_term: 36,
        dealership: 'Toyota',
        details: 'meh',
        website: 'https://www.toyota.com/local-specials/',
        image: 'https://cars.usnews.com/static/images/Auto/izmo/i55706580/2018_toyota_prius_angularfront.jpg',
        style: 'sedan',
        transaction_type: 'lease',
        expiration_date: '6/1/2018',
        ev: false, 
    },
    {
        make: 'Toyota',
        model: 'Prius C',
        trim: '',
        year: 2018,
        lease_price: 289,
        purch_price: 0,
        due_at_sign: 1999,
        lease_term: 36,
        dealership: 'Toyota',
        details: 'meh',
        website: 'https://www.toyota.com/local-specials/',
        image: 'https://cars.usnews.com/static/images/Auto/izmo/i38431300/2018_toyota_prius_c_angularfront.jpg',
        style: 'sedan',
        transaction_type: 'lease',
        expiration_date: '6/1/2018',
        ev: false, 
    },
    {
        make: 'Toyota',
        model: 'Camry Hybrid',
        trim: '',
        year: 2018,
        lease_price: 229,
        purch_price: 0,
        due_at_sign: 2599,
        lease_term: 36,
        dealership: 'Toyota',
        details: 'meh',
        website: 'https://www.toyota.com/local-specials/',
        image: 'http://st.motortrend.com/uploads/sites/10/2017/01/2018-Toyota-Camry-XSE-rear-three-quarter-in-motion-03.jpg',
        style: 'sedan',
        transaction_type: 'lease',
        expiration_date: '6/5/2018',
        ev: false, 
    },
    {
        make: 'Toyota',
        model: 'RAV4 Hybrid',
        trim: '',
        year: 2018,
        lease_price: 229,
        purch_price: 0,
        due_at_sign: 1499,
        lease_term: 36,
        dealership: 'Toyota',
        details: 'meh',
        website: 'https://www.toyota.com/local-specials/',
        image: 'https://www.cars.com/cstatic-images/car-pictures/xl/usc80tos111d021003.png',
        style: 'sedan',
        transaction_type: 'lease',
        expiration_date: '6/5/2018',
        ev: false, 
    },
    {
        make: 'Toyota',
        model: 'Mirai',
        trim: '',
        year: 2018,
        lease_price: 349,
        purch_price: 0,
        due_at_sign: 2499,
        lease_term: 36,
        dealership: 'Toyota',
        details: 'meh',
        website: 'https://www.toyota.com/local-specials/',
        image: 'http://www.carsagram.com/wp-content/uploads/2017/11/2018-Toyota-Mirai-Hydrogen-front-view.jpg',
        style: 'sedan',
        transaction_type: 'lease',
        expiration_date: '6/5/2018',
        ev: false, 
    },
    {
        make: 'Volkswagen',
        model: 'Jetta',
        trim: '',
        year: 2018,
        lease_price: 139,
        purch_price: 0,
        due_at_sign: 2349,
        lease_term: 36,
        dealership: 'Volkswagen',
        details: 'meh',
        website: 'http://www.vw.com/special-offers/',
        image: 'https://icdn1.digitaltrends.com/image/2019-volkwagen-jetta-white-angle-800x533-c.jpg',
        style: 'sedan',
        transaction_type: 'lease',
        expiration_date: '6/1/2018',
        ev: false, 
    },
    {
        make: 'Volkswagen',
        model: 'eGolf',
        trim: 'SEL',
        year: 2017,
        lease_price: 269,
        purch_price: 0,
        due_at_sign: 2999,
        lease_term: 36,
        dealership: 'Volkswagen',
        details: 'meh',
        website: 'http://www.vw.com/special-offers/',
        image: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkewing%2Ffiles%2F2015%2F02%2FeGOLF-LEAD-1940x1293.jpg',
        style: 'sedan',
        transaction_type: 'lease',
        expiration_date: '6/1/2018',
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
        console.log('Created ', res);
        process.exit();
    });