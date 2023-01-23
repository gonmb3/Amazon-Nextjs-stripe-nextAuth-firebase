import Image from "next/image";
import Layout from "./../components/layout/Layout";
import { useSelector } from "react-redux";
import CheckoutProduct from "@/components/CheckoutProduct";


const checkout = () => {
  const { items } = useSelector((state) => state.basket);

  return (
    <Layout title="Checkout">
      <div className="lg:flex mx-auto">
        {/* left */}
        <div className="flew-grow m-5 shadow-sm">
          <Image
            src="/img/bannerCheckout.png"
            width={1020}
            height={250}
            objectFit="contain"
            alt="banner-amazon"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            {items.length === 0 ? (
              <h1 className="text-3xl border-b pb-4">
                {" "}
                Your Amazon Basket is Empty.{" "}
              </h1>
            ) : (
              <h1 className="text-3xl border-b pb-4"> Your Shopping Basket </h1>
            )}
            {items.map((item, index) => (
              <CheckoutProduct key={index} item={item} />
            ))}
          </div>
        </div>
        {/* right */}
        caca
      </div>
    </Layout>
  );
};

export default checkout;
