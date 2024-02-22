import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Product = () => {
  const [search , setSearch] = useState('')
  const [mahsulot , setMahsulot] = useState([])
    async  function getApi() {
    const req = await fetch('http://localhost:3000/data')
    const res = await req.json()
    setMahsulot(res)
  }

  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
      <section>
        <h1 className='text-center my-[60px] text-3xl'>All products</h1>
        <input type="search" placeholder='Search somethings' className='search outline-none relative left-[60px]' value={search} onChange={(e) => setSearch(e.target.value)}/>

        <div className="products">
          {mahsulot.filter((item) =>{
            return search.toLowerCase() === ''? item : item.name.toLowerCase().includes(search) 
          }).map((item, index) => (
            <div key={index} className='card w-max' data-aos="fade-up">
              <img src={item.img} className="rasm" />
              <div className="top flex justify-between gap-[70px] mb-[15px] p-[10px]">
                <h3 className='text-2xl'>{item.name}</h3>
                <button> <i className="fa-brands fa-canadian-maple-leaf text-yellow-500 text-2xl"></i> </button>
              </div>
              <div className="bottom flex justify-between items-center p-[15px]">
                <p className=''>$ {item.price}</p>
                <Link to={`/${item.id}`} className='bg-blue-900 text-white p-2 px-5 rounded-md' >Add to cart</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Product