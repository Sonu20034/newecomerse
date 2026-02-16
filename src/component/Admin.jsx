import React, { useEffect, useState } from 'react'
import { Pen, Trash } from 'lucide-react'

const Admin = () => {
  const [profiles, setProfiles] = useState([]);
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0)
  const [product, setProduct] = useState("")
  const [disc, setDisc] = useState("")
  const [editIndex, setEditIndex] = useState(null)

  const handler = () => {
    if (!image || !price || !product || !disc) {
      alert("please fill all details")
      return
    }
    let checkProductName = profiles.filter(
      (el, i) => el.product === product && i !== editIndex
    )

    if (checkProductName.length > 0) {
      alert("product already exist")
      return
    }
    if (editIndex !== null) {
      let editProfile = [...profiles]
      editProfile[editIndex] = { image, price, product, disc }
      setProfiles(editProfile)
      let allProfiles = JSON.stringify(editProfile)
      localStorage.setItem("productData", allProfiles)
      setImage("")
      setDisc("")
      setProduct("")
      setPrice("")
      alert("profile edited successfully")
    }
    else {
      let products = {
        image,
        price,
        disc,
        product
      }
      let addProduct = [...profiles]
      addProduct.push(products)
      setProfiles(addProduct)

      let allProducts = JSON.stringify(addProduct)
      localStorage.setItem("productData", allProducts)
      setImage("")
      setDisc("")
      setProduct("")
      setPrice("")
      alert("profile added successfully")

    }

  }

  useEffect(() => {
    try {
      const productsData = localStorage.getItem("productData")

      if (!productsData) {
        setProfiles([])
        return
      }

      const parsedData = JSON.parse(productsData)

      if (Array.isArray(parsedData)) {
        setProfiles(parsedData)
      } else {
        setProfiles([])
      }

    } catch (error) {
      localStorage.removeItem("productData")
      setProfiles([])
    }
  }, [])



  const handelDelete = (i) => {
    const newProducts = profiles.filter((element, ind) => i !== ind);
    setProfiles(newProducts);
    let allProducts = JSON.stringify(newProducts)
    localStorage.setItem("productData", allProducts)
  }
  const handleEdit = (i) => {
    setEditIndex(i)
    let Product = profiles[i]
    setImage(Product.image)
    setDisc(Product.disc)
    setPrice(Product.price)
    setProduct(Product.product)
  }
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {profiles.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-[280px] h-[420px] rounded overflow-hidden shadow-lg transition-transform duration-300 hover:scale-95"
          >
            <img
              className="w-[280px] h-[300px] object-cover"
              src={item.image}
              alt=""
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.product}</div>
              <p className="text-gray-700 text-base">{item.disc}</p>
              <p className="font-semibold">${item.price}</p>

              <div className="flex justify-around mt-3">
                <button className="p-2 rounded-lg hover:bg-red-100 transition"><Pen  size={18} onClick={() => handleEdit(index)}  /></button>
                <span onClick={() => handelDelete(index)}>
                  <button  className="p-2 rounded-lg hover:bg-red-100 transition"> <Trash className="text-red-500" size={18} /></button>
                 
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex w-full min-h-screen justify-center items-center  flex-col">

          <div className="flex w-[400px] min-h-[450px] flex-col bg-white p-6 border border-gray-200 items-center rounded-2xl shadow-lg">

            <h1 className="font-bold text-2xl mb-4 text-gray-800">
            Product Details
            </h1>


          

            <div className="w-full mb-3">
              <h1 className="text-gray-700 font-medium">Product Name</h1>
              <input value={product}
              placeholder='Product Name'
                type="text"
                className="h-10 w-full mt-1 px-3 rounded-lg border border-gray-300 focus:outline-none" onChange={(e) => setProduct(e.target.value)}
              />
            </div>

            <div className="w-full mb-3">
              <h1 className="text-gray-700 font-medium">Discription</h1>
              <input value={disc}
               placeholder='Discription'
                type="text"
                className="h-10 w-full mt-1 px-3 rounded-lg border border-gray-300 focus:outline-none" onChange={(e) => setDisc(e.target.value)}
              />
            </div>

            <div className="w-full mb-3">
              <h1 className="text-gray-700 font-medium">Price</h1>
              <input value={price}
              
                type="number"
                className="h-10 w-full mt-1 px-3 rounded-lg border border-gray-300 focus:outline-none" onChange={(e) => setPrice(e.target.value)}
              />
            </div>

              <div className="w-full mb-3">
              <h1 className="text-gray-700 font-medium">Image</h1>
              <textarea value={image}
                type="text"
                 placeholder='Image path'
                className="h-10 w-full mt-1 px-3 rounded-lg border border-gray-300 focus:outline-none"
                onChange={(e) => setImage(e.target.value)} />
            </div>



            <button onClick={handler} className="bg-blue-500 hover:bg-blue-600 transition text-white h-[45px] w-[150px] rounded-full font-semibold shadow-md">
              Add Product
            </button>


          </div>




        </div>

      </div>
    </div>
  )
}


export default Admin