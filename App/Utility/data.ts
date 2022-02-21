import {FoodType, RestaurantType} from '../Models';

interface DataFakeType {
  restaurants: RestaurantType[];
  foods: FoodType[];
}

export const dataFake: DataFakeType = {
  restaurants: [
    {
      id: '1',
      name: 'Beachside Bars',
      image:
        'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
      categories: ['Cafe', 'Bar'],
      price: 15,
      reviews: 1244,
      rating: 4.5,
    },
    {
      id: '2',
      name: 'Benihana',
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      categories: ['Cafe', 'Bar'],
      price: 15,
      reviews: 1244,
      rating: 3.7,
    },
    {
      id: '3',
      name: "India's Grill",
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      categories: ['Indian', 'Bar'],
      price: 15,
      reviews: 700,
      rating: 4.9,
    },
  ],
  foods: [
    {
      id: '1',
      title: 'Lasagna',
      description: 'With butter lettuce, tomato and sauce bechamel',
      price: '$13.50',
      image:
        'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
      rating: 4.2,
      waitingTime: 30,
    },
    {
      id: '2',
      title: 'Tandoori Chicken',
      description:
        'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
      price: '$19.20',
      image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
      rating: 4.0,
      waitingTime: 35,
    },
    {
      id: '3',
      title: 'Chilaquiles',
      description:
        'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
      price: '$14.50',
      image:
        'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
      rating: 4.4,
      waitingTime: 50,
    },
    {
      id: '4',
      title: 'Chicken Caesar Salad',
      description:
        'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
      price: '$21.50',
      image:
        'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
      rating: 4.1,
      waitingTime: 10,
    },
    {
      id: '5',
      title: 'Chicken Caesar Salad',
      description:
        'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
      price: '$21.50',
      image:
        'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
      rating: 4.0,
      waitingTime: 15,
    },
    {
      id: '6',
      title: 'Chicken Caesar Salad',
      description:
        'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
      price: '$21.50',
      image:
        'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
      rating: 4.7,
      waitingTime: 25,
    },
    {
      id: '7',
      title: 'Chicken Caesar Salad Special',
      description:
        'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
      price: '$21.50',
      image:
        'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
      rating: 4.7,
      waitingTime: 25,
    },
  ],
};
