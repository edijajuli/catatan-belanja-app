/* eslint-disable react/prop-types */
import { useState } from "react"
import Item from "./Item"
export default function GroceryList({items, onDeleteItem, onToggleItem, onClearItems}) {
    const [shortBy, setShortBy] = useState("input")
  
    let shortedItems
  
    // if(shortBy === "input") {
    //   shortedItems = items
    // }
  
    // if(shortBy === "name") {
    //   shortedItems = items.slice().sort((a,b) => a.name.localeCompare(b.name))
    // }
  
    // if(shortBy === "checked") {
    //   shortedItems = items.slice().sort((a,b) => a.checked - b.checked)
    // }
  
    switch(shortBy) {
      case "name":
        shortedItems = items.slice().sort((a,b) => a.name.localeCompare(b.name))
        break
      case "checked":
        shortedItems = items.slice().sort((a,b) => a.checked - b.checked)
        break
      default:
        shortedItems = items
        break
    }
  
    return (
      <>
        <div className="list">
          <ul>
            {shortedItems.map((item) => (
              <Item item={item} key={item.id} onDeleteItem={onDeleteItem} 
              onToggleItem={onToggleItem}/>
            ))}
          </ul>
        </div>
        <div className="actions">
          <select value={shortBy} onChange={(e) => setShortBy(e.target.value)}>
            <option value="input">Urutkan berdasarkan urutan input</option>
            <option value="name">Urutkan berdasarkan nama barang</option>
            <option value="checked">Urutkan berdasarkan ceklis</option>
          </select>
          <button onClick={onClearItems}>Bersihkan Daftar</button>
        </div>
      </>
    )
  }