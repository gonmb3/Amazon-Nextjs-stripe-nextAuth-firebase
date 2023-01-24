import Image from "next/image";
import Layout from "./../components/layout/Layout";
import { useSelector } from "react-redux";
import CheckoutProduct from "@/components/CheckoutProduct";
import { useSession } from 'next-auth/react';
import { selectTotal } from './../slices/basketSlice';
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)


const checkout = () => {
  const  {items}  = useSelector((state) => state.basket);
  const total = useSelector(selectTotal)

  
  const {data:session} = useSession();

  const createCheckoutSession = async () => {
      const stripe = await stripePromise;

      //call to create a checkout session...
      const checkoutSession = await axios.post("/api/checkout_sessions", {
        items: items,
        email: session.user.email
      });

      //redirect to checkout
      const result = await stripe.redirectToCheckout({
        sessionId: checkoutSession.data.id
      })

      if(result.error){
        alert(result.error)
      }

  }

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
     
                {
                  items.length > 0 && (
                    <div className="flex flex-col bg-white p-10 shadow-md ">
                    <h2 className="whitespace-nowrap">Subtotal ({items.length}) items :
                    <span className="font-bold">${total.toFixed(2)}</span>                  
                    </h2>

                     <button 
                     onClick={createCheckoutSession}
                     role="link"
                     disabled={!session}
                     className={`button mt-2 ${!session && "from-gray-300 to-gray-500  border-gray-200 text-gray-300 cursor-not-allowed"}`} >
                      {!session ? "Sign in to checkout" : "Proceed to checkout"}
                     </button>
                    </div>
                  )
                }
      
      </div>
    </Layout>
  );
};

export default checkout;
