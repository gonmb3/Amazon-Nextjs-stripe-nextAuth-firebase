import { buffer } from "micro";
import * as admin from "firebase-admin";

// secure contection to firebase from the backend
const serviceAccount = require("../../permissions.json");
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

// conecction to Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SCECRET;

const fulfillOrder = async (session) => {
  console.log("fulfilling order", session);

  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders").doc(session.id).set({
        amount:session.amount_total / 100,
        amount_shipping:session.total_details.amount_shipping / 100,
        images: JSON.parse(session.metadata.images),
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        console.log(`Success: order ${session.id} `)
    })
};

export default async (req, res) => {
  if (req.method === "POST") {
    let event;
    //verify event came from stripe
    try {
      const requestBuffer = await buffer(req);
      const payload = requestBuffer.toString();
      const sig = req.headers["stripe-signature"];

      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log("Error", err.message);
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      return fulfillOrder(session)
      .then(() => res.status(200).send())
      .catch(err => {
        res.status(400).send(`Webhook error : ${err.message}`)
      })
    }
  }
};

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    }
}
