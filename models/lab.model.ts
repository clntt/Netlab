import { Schema, model, models } from "mongoose";

const LabSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    config: {
      type: String,
      required: true,
    },

    topologyImage: {
      type: String,
    },

    difficulty: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },

    tags: [
      {
        type: String,
      },
    ],

    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Lab = models.Lab || model("Lab", LabSchema);

export default Lab;
