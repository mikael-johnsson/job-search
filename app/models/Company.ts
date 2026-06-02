import { model, models, Schema } from "mongoose";

export type Company = {
  _id?: string;
  name: string;
  city: string;
  employees: number;
  frontendTechstack: string[];
  backendTechstack: string[];
  testTechstack: string[];
  databaseTechstack: string[];
  otherTechstack: string[];
};

export const CompanySchema = new Schema<Company>({
  name: { type: String, required: true },
  city: { type: String, required: true },
  employees: { type: Number, required: true },
  frontendTechstack: [{ type: String }],
  backendTechstack: [{ type: String }],
  testTechstack: [{ type: String }],
  databaseTechstack: [{ type: String }],
  otherTechstack: [{ type: String }],
});

const CompanyModel = models.Company || model<Company>("Company", CompanySchema);
export default CompanyModel;
