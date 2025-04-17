const sampledata=[
    {
      title: "Pizza",
      content: "Classic Neapolitan pizza with fresh mozzarella, tomatoes, basil, and olive oil.",
      price: 150,
      img: "https://th.bing.com/th/id/R.c94c918728dc98af7fd6d8e0eb4a428d?rik=iCLIghU%2bEzcnkA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-5%2fPizza-HD-Wallpapers-15281.jpg&ehk=LJyawzBePf31Sr%2fZXRy29Lz0krtne65Cbr18njiB2EI%3d&risl=&pid=ImgRaw&r=0",
      type:"dinner"
    },
    {
      title: "Cheeseburger",
      content: "Juicy beef patty with cheddar cheese, lettuce, tomato, and house sauce on a toasted bun.",
      price: 120,
      img: "https://i.pinimg.com/originals/b6/51/c4/b651c473c595f728118644568221637e.jpg",
      type:"dinner"
    },
    {
      title: "Sushi Platter",
      content: "An assorted platter of nigiri, maki, and sashimi, served with wasabi and soy sauce.",
      price: 280,
      img: "https://th.bing.com/th/id/OIP.q860JWbBuBvKeBNMGe_QMAHaHa?rs=1&pid=ImgDetMain",
      type:"lunch"
    },
    {
      title: "Chicken Biryani",
      content: "Fragrant basmati rice layered with marinated chicken, herbs, and spices.",
      price: 200,
      img: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01-768x768.jpg",
      type:"lunch"
    },
    {
      title: "Pasta Alfredo",
      content: "Creamy Alfredo sauce tossed with fettuccine, parmesan, and grilled chicken.",
      price: 170,
      img: "https://th.bing.com/th/id/OIP.z9ChSVC_HzFo6LYlc7srHAHaHT?rs=1&pid=ImgDetMain",
      type:"breakfast"
    },
    {
      title: "Veggie Wrap",
      content: "Whole wheat wrap filled with grilled vegetables, hummus, and fresh greens.",
      price: 110,
      img: "https://th.bing.com/th/id/OIP.z9ChSVC_HzFo6LYlc7srHAHaHT?rs=1&pid=ImgDetMain",
      type:"lunch"
    },
    {
      title: "Paneer Tikka",
      content: "Cubes of paneer marinated in yogurt and spices, grilled to perfection.",
      price: 160,
      img: "https://th.bing.com/th/id/OIP.z9ChSVC_HzFo6LYlc7srHAHaHT?rs=1&pid=ImgDetMain",
      type:"dinner"
    },
    {
      title: "Falafel Bowl",
      content: "Crispy falafel served with tabbouleh, hummus, and tahini over rice.",
      price: 140,
      img: "https://th.bing.com/th/id/OIP.z9ChSVC_HzFo6LYlc7srHAHaHT?rs=1&pid=ImgDetMain",
      type:"lunch"
    },
    {
      title: "Tacos",
      content: "Soft tortillas filled with spiced beef, salsa, lettuce, and cheese.",
      price: 130,
      img: "https://th.bing.com/th/id/OIP.zCkO39boY8O_wQctqetmKwHaE8?rs=1&pid=ImgDetMain",
      type:"breakfast"
    },
    {
      title: "Butter Chicken",
      content: "Rich tomato-based curry with tender chicken pieces, served with naan or rice.",
      price: 220,
      img: "https://th.bing.com/th/id/OIP.rEaZT0UdKNvZB6pAfHTRMgHaE7?rs=1&pid=ImgDetMain",
      type:"lunch"
    },
    {
      title: "Club Sandwich",
      content: "Triple-layered sandwich with grilled chicken, lettuce, tomato, egg, and mayo.",
      price: 150,
      img: "https://th.bing.com/th/id/OIP.uhAlHcFeMnYFqTCm06UxdwHaE7?rs=1&pid=ImgDetMain",
      type:"breakfast"
    },
    {
      title: "Caesar Salad",
      content: "Romaine lettuce with Caesar dressing, parmesan, croutons, and grilled chicken.",
      price: 125,
      img: "https://th.bing.com/th/id/OIP.o1GvH6G8G4hCwH3bIR1HjAHaE8?rs=1&pid=ImgDetMain",
      type:"breakfast"
    },
    {
      title: "Fish and Chips",
      content: "Crispy battered fish fillet with golden fries and tartar sauce.",
      price: 180,
      img: "https://th.bing.com/th/id/OIP.rNtkXTHleFa_TQKZBUhAygHaE8?rs=1&pid=ImgDetMain",
      type:"lunch"
    },
    {
      title: "Shawarma",
      content: "Tender chicken slices wrapped in pita with garlic sauce and veggies.",
      price: 130,
      img: "https://th.bing.com/th/id/OIP.GV5TDSY_zNEeSxEfrSSuAAHaE8?rs=1&pid=ImgDetMain",
      type:"dinner"
    },
    {
      title: "Momos",
      content: "Steamed dumplings filled with spicy chicken or vegetables, served with dip.",
      price: 100,
      img: "https://th.bing.com/th/id/OIP.fKPY2GzL-ZNSlmyZpFvl6gHaE8?rs=1&pid=ImgDetMain",
      type:"dinner"
    },
    {
      title: "Ramen Bowl",
      content: "Warm and savory ramen with noodles, broth, egg, and sliced pork or tofu.",
      price: 190,
      img: "https://th.bing.com/th/id/OIP.T4OvZqQFZTHaEiRUPipUGQHaE8?rs=1&pid=ImgDetMain",
      type:"breakfast"
    },
    {
      title: "Pancake Stack",
      content: "Fluffy pancakes stacked and topped with maple syrup and fresh berries.",
      price: 140,
      img: "https://th.bing.com/th/id/OIP.dnZ_1DQKSTTGf8kp2VY8fgHaE7?rs=1&pid=ImgDetMain",
      type:"breakfast"
    },
    {
      title: "Masala Dosa",
      content: "South Indian crispy dosa filled with spiced potato and served with chutney.",
      price: 100,
      img: "https://th.bing.com/th/id/OIP.XuOrDFD9LQNm9Q9USwWWFwHaEK?rs=1&pid=ImgDetMain",
      type:"dinner"
    },
    {
      title: "Chocolate Brownie",
      content: "Rich and fudgy brownie with chunks of dark chocolate and a gooey center.",
      price: 90,
      img: "https://th.bing.com/th/id/OIP.rZLrIq2jzpXBuDF_6iHh5QHaE7?rs=1&pid=ImgDetMain",
      type:"dinner"
    },
    {
      title: "Grilled Cheese",
      content: "Golden, buttery toast with melted cheddar cheese—simple and satisfying.",
      price: 80,
      img: "https://th.bing.com/th/id/OIP.dJ8GVq8zIN4UhDUnJ2TrUwHaE7?rs=1&pid=ImgDetMain",
      type:"breakfast"
    },
    {
      title: "Ice Cream Sundae",
      content: "Scoop of vanilla ice cream topped with chocolate syrup, nuts, and a cherry.",
      price: 95,
      img: "https://th.bing.com/th/id/OIP.6C4Wxq6evlFhWr3pbRQLMgHaHa?rs=1&pid=ImgDetMain",
      type:"dinner"
    }
  ]
  module.exports={data:sampledata}