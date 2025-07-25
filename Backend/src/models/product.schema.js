import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: ["true", "please provide a product name"],
      trim: true,
      maxLength: [120, "product name should be atleast 120 chars"],
    },
    price: {
      type: Number,
      required: ["true", "please provide a product price"],
      maxLength: [120, "product price should be atleast 120 chars"],
    },
    discription: {
      type: String,
    },

    // you can apply this structure to videos also
    photos: [
      {
        secure_url: {
          type: String,
          required: true,
        },
      },
    ],
    stock: {
      type: Number,
      default: 0,
    },
    sold: {
      type: Number,
      default: 0,
    },
    // connecting to another schema
    collectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
