import React from 'react';
import './App.css';
import Cart from './components/Cart/Cart'

import img1 from './assets/cart/img1.jpeg'
import img2 from './assets/cart/img2.jpeg'
import img3 from './assets/cart/img3.jpeg'
import img4 from './assets/cart/img4.jpeg'
import img5 from './assets/cart/img5.jpeg'
import img6 from './assets/cart/img6.jpeg'
import img7 from './assets/cart/img7.jpeg'
import img8 from './assets/cart/img8.jpeg'

const products = [
  {
    image: img1,
    title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
    desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
    price: '64,79'
  },
  {
    image: img2,
    title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
    desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
    price: '64,79'
  },
  {
    image: img3,
    title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
    desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
    price: '64,79'
  },
  {
    image: img4,
    title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
    desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
    price: '64,79'
  },
  {
    image: img5,
    title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
    desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
    price: '64,79'
  },
  {
    image: img6,
    title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
    desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
    price: '64,79'
  },
  {
    image: img7,
    title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
    desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
    price: '64,79'
  },
  {
    image: img8,
    title: 'Kostenlose Rücksendungen innerhalb von 90 Tagen',
    desc: 'Temu kompensiert die Kohlenstoffemissionen jeder Lieferung',
    price: '64,79'
  }
]

function App() {
  return (
    <div className="app">
     {
      products.map(product => (
        <Cart 
        image={product.image}
        title={product.title}
        desc={product.desc}
        price={product.price}
        />
      ))
     }
    </div>
  );
}

export default App;
