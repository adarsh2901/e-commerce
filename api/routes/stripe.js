const router = require("express").Router();
// const stripe=require('stripe')(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")(KEY);

router.post("/payment", async (req, res) => {
  stripe.checkout.sessions.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (err, charge) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(charge);
      }
    }
  );
});

module.exports = router;
