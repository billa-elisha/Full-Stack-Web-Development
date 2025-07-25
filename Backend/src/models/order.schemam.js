import mongoose from "mongoose";
import orderStatus from "../utils/orderStatus";

const orderSchema = mongoose.Schema(
  {
    // purchase product may be more than on so we use array
    product: {
      type: [
        {
          // because the product is in the product table we need not the name but the id
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            // refering to the product in the product table
            ref: "Product",
          },
          count: Number,
          //   individual product price,
          price: Number,
        },
      ],
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: Number,
      required: true,
    },
    // final order amount
    amount: {
      type: Number,
      required: true,
    },
    coupon: String,
    transactionId: String,

    status: {
      type: String,
      enum: Object.values(orderStatus),
      default: orderStatus.ORDERED,
    },
  },
  { timestamps: true }
);
