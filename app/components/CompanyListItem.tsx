import Link from "next/link";
import { Company } from "../models/Company";

const CompanyListItem = (company: Company) => {
  return (
    <Link
      className={`${company.employees < 100 ? "bg-green-300" : company.employees <= 500 ? "bg-blue-300" : "bg-yellow-300"} w-28 h-12 border flex items-center justify-center rounded hover:shadow-xl transition-shadow`}
      key={company._id}
      href={`/${company._id}`}
    >
      <span className="text-center text-xs ">{company.name}</span>
    </Link>
  );
};

export default CompanyListItem;
