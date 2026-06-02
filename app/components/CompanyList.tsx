import Link from "next/link";
import CompanyModel, { Company } from "../models/Company";
import { connectDB } from "../lib/db";

const CompanyList = async () => {
  await connectDB();
  const companies: Company[] = await CompanyModel.find().lean();
  return (
    <div className="grid gap-2 grid-cols-4">
      <h2 className="col-span-4 text-center text-xl font-bold">Företag</h2>
      {companies.map((company) => (
        <Link
          className="w-35 h-20 border flex flex-col items-center justify-center rounded hover:shadow-xl transition-shadow"
          key={company._id}
          href={`/${company._id}`}
        >
          <span className="text-center p-4">{company.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default CompanyList;
