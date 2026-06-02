import mongoose, { models, Schema } from "mongoose";

export type TechCategory =
  | "frontend"
  | "backend"
  | "testning"
  | "databaser"
  | "ovrigt";

export type Tech = {
  _id: string;
  name: string;
  category: TechCategory;
};

const techSchema = new Schema<Tech>({
  name: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ["frontend", "backend", "testning", "databaser", "ovrigt"],
  },
});

const TechModel = models.Tech || mongoose.model<Tech>("Tech", techSchema);

export default TechModel;
