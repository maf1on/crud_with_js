import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const [data, setData] = useState([
    {
      id: 0,
      img: 'https://avion-uz.vercel.app/img/p1.png',
      name: 'the dandy chair',
      price: 250,
    }, {
      id: 1,
      img: 'https://avion-uz.vercel.app/img/p2.png',
      name: 'rustic vase set',
      price: 155,
    }, {
      id: 2,
      img: 'https://avion-uz.vercel.app/img/p3.png',
      name: 'the sily vase',
      price: 125,
    }, {
      id: 3,
      img: 'https://avion-uz.vercel.app/img/p4.png',
      name: 'the lucy lamp',
      price: 199,
    },
  ]);

  return (
    <>
      <section className='bg-blue-950 h-[91vh] relative'>
        <div data-aos="fade-up-right" className='right bg-white w-max absolute top-[170px] right-[70px] h-[350px] p-[30px]'>
          <h1 className='text-5xl'>Luxury homeware for people <br /> who love timeless design <br /> quality</h1>
          <p className='my-[40px]'>Shop the new Spring 2022 collection today</p>
          <Link to={'/product'} className='btn p-3'>View collection</Link>
        </div>
      </section>

      <section className='px-16'>
        <h1 className='text-center py-[60px] text-2xl'>What makes our brand different</h1>
        <div className='parent flex gap-[100px]'>
          <div data-aos="fade-up" className='w-[300px]'>
            <i className='fa-solid fa-truck-fast text-3xl'></i>
            <h3 className='text-2xl py-5'>Next day as standard</h3>
            <p>Order before 3pm and get your order the next day as standard</p>
          </div>

          <div data-aos="fade-up" className='w-[300px]'>
            <i className='fa-regular fa-circle-check text-3xl'></i>
            <h3 className='text-2xl py-5'>Made by true artisans</h3>
            <p>Handmade crafted goods made with real passion and craftsmanship</p>
          </div>

          <div data-aos="fade-up" className='w-[300px]'>
            <i className='fa-regular fa-credit-card text-3xl'></i>
            <h3 className='text-2xl py-5'>Unbeatable prices</h3>
            <p>For our materials and quality, you won't find better prices anywhere</p>
          </div>

          <div data-aos="fade-up" className='w-[300px]'>
            <i className='fa-brands fa-canadian-maple-leaf text-3xl'></i>
            <h3 className='text-2xl py-5'>Recycled packaging</h3>
            <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
          </div>
        </div>
      </section>

      <section>
        <h1 className='p-[60px] text-3xl'>New ceramics</h1>
        <div className='flex gap-[90px] px-[60px] mb-14 ' data-aos="fade-up">
          {data.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt='' />
              <h1 className='text-2xl'>{item.name}</h1>
              <p>$ {item.price}</p>
            </div>
          ))}
        </div>
        <Link to={'/products'} className='btn p-3 relative left-[700px]'>View collection</Link>
      </section>

      <section>
        <div className="parent bg-blue-950 text-white h-[524px] mx-16 my-16  flex gap-7">
          <div className="left p-10">
            <h1 className='text-4xl mb-7'>It started with a small idea</h1>
            <p className=' mb-[254px] text-2xl'>A global brand with local beginnings, our story <br /> begain in a small studio in South London in early 2014</p>
            <Link to={'/products'} className='link p-3'>View collection</Link>
          </div>
          <div className="right">
            <img src="https://avion-uz.vercel.app/img/sofa.png" className='img' />
          </div>
        </div>
      </section>

      <section>
        <div className="parent text-center relative bottom-[10px] mb-[150px]">
          <h1 className='text-4xl text-blue-950'>Join the club and get the benefits</h1>
          <p className='text-blue-950 mb-8'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
          <div className="inp absolute left-[630px] ">
            <input type="email" placeholder='Your@gmail.com' className='p-3 outline-none' />
            <Link to={'/sign'} className=' sign bg-blue-950 text-white'>Sign in</Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;