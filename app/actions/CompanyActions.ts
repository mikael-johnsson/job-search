"use server";

import { connectDB } from "../lib/db";
import TechModel from "../models/Tech";
import CompanyModel from "../models/Company";

export const createCompany = async (formData: FormData) => {
  const company = formData.get("company") as string;
  const city = formData.get("city") as string;
  const employees = formData.get("employees") as string;
  const frontendTechstack = formData.getAll("frontendTech") as string[];
  const backendTechstack = formData.getAll("backendTech") as string[];
  const testTechstack = formData.getAll("testTech") as string[];
  const databaseTechstack = formData.getAll("databaseTech") as string[];
  const otherTechstack = formData.getAll("otherTech") as string[];

  const result = await CompanyModel.create({
    name: company,
    city,
    employees: +employees,
    frontendTechstack,
    backendTechstack,
    testTechstack,
    databaseTechstack,
    otherTechstack,
  });
};
