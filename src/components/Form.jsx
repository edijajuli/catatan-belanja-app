/* eslint-disable react/prop-types */
import { useState } from "react"
export default function Form({onAddItem}) {

    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(1)
    //membuat array baru untuk membuat 15 option
    const quantityNum = [...Array(15)].map((_, i) => (
      <option value={i+1} key={i+1}>{i+1}</option>
    ))
  
  //fungsi untuk meng handle ketika form di enter atau di submit
  function handleSubmit(e) {
    e.preventDefault() //menghandle refresh web
    if(!name) return  //jika inputan kosong object tidak di submit
    const newItem = {name, quantity, checked: false, id: Date.now()}
    onAddItem(newItem) //menambahkan list yang di input ke dalam form tanpa mengubah array aslinya
    console.log(newItem);
    setName("")
    setQuantity(1)
  }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>Hari ini belanja apa kita?</h3>
        <div>
          <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            {quantityNum}
          </select>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="nama barang..." />
        </div>
        <button>Tambah</button>
      </form>
    )
  }