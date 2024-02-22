import React from "react";

const Basket = () => {
  return (
    <>
      <section className="mb-[250px] p-[80px]">
        <h2 className="text-3xl">Your cart shopping</h2>
        <div className="ota pb-4">
          <div className="yuqori flex justify-around pt-[60px] text-2xl">
            <p className="mr-[180px]">Product</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Action</p>
          </div>
        </div>
        <div className="ota2 flex justify-around items-center mt-4">
          <div className="child1 flex">
            <img
              src="https://avion-uz.vercel.app/img/p1.png"
              className="w-[100px] relative right-[100px]"
            />
            <div className="text relative right-[100px]">
              <h3>rustic vase</h3>
              <p>A timeless ceramic vase with a tri color grey glaze</p>
              <h3>$155</h3>
            </div>
          </div>
          <div className="child2 flex justify-between  w-[80px]">
            <button>-</button>
            <h3>1</h3>
            <button>+</button>
          </div>
          <div className="child3">
            <h4>Total: $155</h4>
          </div>
          <div className="child4">
            <i class="fa-solid fa-trash"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Basket;
