import CompanyModel, { Company } from "../models/Company";
import { connectDB } from "../lib/db";
import CompanyListItem from "./CompanyListItem";

const CompanyList = async () => {
  await connectDB();
  const companies: Company[] = await CompanyModel.find().lean();
  return (
    <div>
      <h2 className="mb-5 text-center text-xl font-bold">Företag</h2>
      <div className="flex gap-2 justify-center mb-5">
        <span className="text-sm bg-green-300 p-2 rounded-2xl">
          Under 100 pers
        </span>
        <span className="text-sm bg-blue-300 p-2 rounded-2xl">
          100-500 pers
        </span>
        <span className="text-sm bg-yellow-300 p-2 rounded-2xl">500+ pers</span>
      </div>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
        {companies.map((company) => (
          <CompanyListItem key={company._id} {...company} />
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
