"use server";

import { connectDB } from "../lib/db";
import TechModel from "../models/Tech";

export const createTech = async (formData: FormData) => {
  await connectDB();
  const name = formData.get("tech") as string;
  const category = formData.get("category") as string;

  const result = await TechModel.create({ name, category });
  console.log("Result from tech creation:", await result);
};
