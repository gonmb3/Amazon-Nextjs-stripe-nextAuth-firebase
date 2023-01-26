import { useRouter } from "next/router";
import {AiFillCheckCircle} from "react-icons/ai"
import Layout from '../components/layout/Layout';

const success = () => {
  const router = useRouter();

  return (
    <Layout>

      <div className="max-w-screen mx-auto">
          <div className="flex flex-col p-10 bg-white">
              <div className="flex items-center space-x-2 mb-5">
                  <AiFillCheckCircle className="text-green-500" size={33} />

                  <h1 className="text-3xl">Thank you, your order has been confirmed!</h1>
              </div>
              <p>Thank you for shopping with us, We'll send a confirmation once your item has shipped.
              </p>
     
             <button 
             className="button mt-5"
             onClick={() =>   router.push("/")  }
             >Continue Shopping
             </button>
          
          </div>
      </div>
      
    </Layout>
  )
}

export default success