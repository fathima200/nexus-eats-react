const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://Fatima:Bwf8pGcbualnQrSF@mongodemo.irjkj.mongodb.net/?retryWrites=true&w=majority&appName=MongoDemo";
const client = new MongoClient(uri);

const meals = [

    {
      "_id": "1",
      "name": "Pancakes with Honey & Fried Plantain",
      "price": 5000,
      "image": "/images/images__3_-removebg-preview.png",
      "description": "Grilled chicken on a bed of greens, tomatoes, and avocado, drizzled with a Nigerian dressing.",
      "category": "Popular Breakfast"
    },
    {
      "_id": "2",
      "name": "Scrambled Eggs with Toast",
      "price": 7000,
      "image": "/images/f76b02c9-ee54-4c23-8059-8f3c1db871dd-removebg-preview.png",
      "description": "A Soft, creamy scrambled eggs served with crispy toast and a side of tomatoes.",
      "category": "Popular Breakfast"
    },
    {
      "_id": "3",
      "name": "Smoothie Bowl with Nigerian Fruits",
      "price": 7000,
      "image": "/images/acai-smoothie-coconut-shell-removebg-preview.png",
      "description": "A mix of local fruits like mango, banana, and pawpaw, topped with granola and honey.",
      "category": "Popular Breakfast"
    },
    {
      "_id": "4",
      "name": "Chicken Caesar Salad",
      "price": 5000,
      "image": "/images/hero.png",
      "description": "Grilled chicken on a bed of greens, tomatoes, and avocado, drizzled with a Nigerian dressing.",
      "category": "Special Lunch"
    },
    {
      "_id": "5",
      "name": "Chicken Shawarma Plate with Pita Bread",
      "price": 10000,
      "image": "/images/c9e0dbef-ae03-4cb9-a54f-0741add40bb2-removebg-preview.png",
      "description": "Grilled chicken Shawarma served with hummus, pita bread, and a tangy Nigerian tomato-based sauce.",
      "category": "Special Lunch"
    },
    {
      "_id": "6",
      "name": "Smoothie Bowl with Nigerian Fruits",
      "price": 7000,
      "image": "/images/418503eb-3d3e-4e39-9b42-f67e0ab547c6-removebg-preview.png",
      "description": "A mix of local fruits like mango, banana, and pawpaw, topped with granola and honey.",
      "category": "Special Lunch"
    },
    {
      "_id": "7",
      "name": "Smooth Amala with Ewedu",
      "price": 5000,
      "image": "/images/download__19_-removebg-preview.png",
      "description": "Grilled chicken on a bed of greens, tomatoes, and avocado, drizzled with a Nigerian dressing.",
      "category": "Lovely Dinner"
    },
    {
      "_id": "8",
      "name": "Pounded Yam with Egusi Soup",
      "price": 10000,
      "image": "/images/download__21_-removebg-preview.png",
      "description": "Smooth Pounded with Egusi soup, a nice dinner after a long day.",
      "category": "Lovely Dinner"
    },
    {
      "_id": "9",
      "name": "Jollof Rice with Chicken",
      "price": 7000,
      "image": "/images/download__20_-removebg-preview.png",
      "description": "Jollof rice with chicken with tomatoes, onions, and pepper, often served with a side of fried plantains.",
      "category": "Lovely Dinner"
    }
  
];

