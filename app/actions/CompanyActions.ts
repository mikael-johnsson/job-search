"use server";

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

export const updateCompany = async (id: string, formData: FormData) => {
  const company = formData.get("company") as string;
  const city = formData.get("city") as string;
  const employees = formData.get("employees") as string;
  const frontendTechstack = formData.getAll("frontendTech") as string[];
  const backendTechstack = formData.getAll("backendTech") as string[];
  const testTechstack = formData.getAll("testTech") as string[];
  const databaseTechstack = formData.getAll("databaseTech") as string[];
  const otherTechstack = formData.getAll("otherTech") as string[];

  await CompanyModel.findByIdAndUpdate(id, {
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
