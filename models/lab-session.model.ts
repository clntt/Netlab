import mongoose from "mongoose";

const LabSessionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    labId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    currentStep: {
      type: Number,
      default: 0,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    logs: [
      {
        command: String,
        result: String,
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.LabSession ||
  mongoose.model("LabSession", LabSessionSchema);
