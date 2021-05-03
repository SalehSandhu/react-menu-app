import React, { useState } from 'react'
import Menu from './Menu'
import Catagories from './Catagories'
import items from './data'

const allCatagories =['all', ... new Set(items.map((item) => item.category))]
console.log(allCatagories);

function App() {
  const [menuItems, setMemuItems] = useState(items)
  const [catagories, setCatagories] = useState(allCatagories)

  const filterItems = (catergory) => {
    if(catergory === "all") {
      setMemuItems(items)
      return
    }
    const newItems = items.filter((item) => 
      item.category === catergory)
      setMemuItems(newItems)    
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Catagories catagories={allCatagories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
