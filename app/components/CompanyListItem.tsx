import Link from "next/link";
import { Company } from "../models/Company";

const CompanyListItem = (company: Company) => {
  return (
    <Link
      className={`${company.employees < 100 ? "bg-green-300" : company.employees <= 500 ? "bg-blue-300" : "bg-yellow-300"} w-25 h-15 border flex flex-col items-center justify-center rounded hover:shadow-xl transition-shadow`}
      key={company._id}
      href={`/${company._id}`}
    >
      <span className="text-center p-4">{company.name}</span>
    </Link>
  );
};

export default CompanyListItem;
