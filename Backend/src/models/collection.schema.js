import mangoose from "mangoose";

// creating our collection data structure
const collectionSchema = new mangoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide collection name"],
      trim: true,
      maxLength: [120, "Collection name should not be more than 120 chars"],
    },
  },
  { timestaps: true }
);

export default mangoose.model("Collection", collectionSchema);
