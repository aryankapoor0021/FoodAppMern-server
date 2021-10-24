const mongoose = require('mongoose');
const Food = require('./models/food');

const Dummy_foods = [
    {
        name: 'Burger',
        price: 90,
        desc:'Extra Cheese and Spice'
    },
    {
        name: 'Panner Tikka',
        price: 225,
        desc:'Smooth and Delicious Paneer grilled to Perfection'
    },
    {
        name: 'Pizza',
        price: 200,
        desc:'Cheesy Burst Pizza with Veggies Toopings'
    },
    {
        name: 'Pasta',
        price: 150,
        desc:'Cheese loaded Pasta'
    },
     {
        name: 'Noodles',
        price: 110,
        desc:'Chilli Garlic Noodles tossed in finest veggies'
    },
];



const seedDB = async() => {
    try {
        await Food.deleteMany({});
        await Food.insertMany(Dummy_foods);
        console.log('Database seeded');
    } catch(e) {
        console.log(e);
        console.log('Error while seeding Database');
    }
    
    

}


module.exports = seedDB;
