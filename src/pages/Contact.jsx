import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="text-start text-3xl m-[60px]">Contact-AvionCorp</h1>
      <div className="parent p-[60px] flex justify-between items-center">
        <div className="left">
          <p className="mb-[40px]">
            Do you have any questions?
            <br />
            My operator friends always have the answers! <br />
            Call us every day from 08:00 to 23:00 <br />
            at the number: 78 222 2222{" "}
          </p>
          <p className="mb-[40px]">
            We will be happy to help you place an order for take-out or
            delivery.
          </p>
          <p className="mb-[40px]">
            Delivery is carried out throughout the city of Tashkent. The cost
            depends on the <br /> distance.
          </p>
          <p className="mb-[40px]">
            The first 3 kilometers - 9,000 soums, after, each subsequent 1,500
            soums. Delivery <br /> hours: 09:00 - 22:00
          </p>
        </div>
        <div className="right">
          <img
            src="https://www.newcastle.edu.au/__data/assets/image/0010/795079/Q-Building-WEB.jpg"
            alt=""
            className="w-[700px] rounded-md"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
