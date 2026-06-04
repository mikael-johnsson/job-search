import { connectDB } from "../lib/db";
import CompanyModel, { Company } from "../models/Company";
import CompanyListItem from "./CompanyListItem";

type MatchCompanyListProps = {
  frontendTech: string[];
  backendTech: string[];
  testTech: string[];
  databaseTech: string[];
  otherTech: string[];
};

const MatchCompanyList = async ({
  frontendTech,
  backendTech,
  testTech,
  databaseTech,
  otherTech,
}: MatchCompanyListProps) => {
  await connectDB();

  const uf = frontendTech.filter(Boolean);
  const ub = backendTech.filter(Boolean);
  const ut = testTech.filter(Boolean);
  const ud = databaseTech.filter(Boolean);
  const uo = otherTech.filter(Boolean);

  const allPropsEmpty = [uf, ub, ut, ud, uo].every(
    (stack) => stack.length === 0,
  );

  const filters: Record<string, unknown>[] = [];
  if (uf.length) filters.push({ frontendTechstack: { $in: uf } });
  if (ub.length) filters.push({ backendTechstack: { $in: ub } });
  if (ut.length) filters.push({ testTechstack: { $in: ut } });
  if (ud.length) filters.push({ databaseTechstack: { $in: ud } });
  if (uo.length) filters.push({ otherTechstack: { $in: uo } });

  const query = allPropsEmpty ? {} : { $and: filters };
  const companies: Company[] = await CompanyModel.find(query).lean();

  return (
    <div>
      <h2 className="mb-5 text-center text-xl font-bold">
        Företagen som matchar dig
      </h2>
      <div className="flex gap-2 justify-center mb-5">
        <span className="text-sm bg-green-300 p-2 rounded-2xl">
          Under 100 pers
        </span>
        <span className="text-sm bg-blue-300 p-2 rounded-2xl">
          100-500 pers
        </span>
        <span className="text-sm bg-yellow-300 p-2 rounded-2xl">500+ pers</span>
      </div>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-5">
        {allPropsEmpty ? (
          <p className="col-span-full text-center">
            Välj teknologier för att se matchande företag.
          </p>
        ) : companies.length ? (
          companies.map((company) => (
            <CompanyListItem key={company._id} {...company} />
          ))
        ) : (
          <p className="col-span-full text-center">
            Inga företag hittades som matchar dina teknologier. Testa att minska
            dina val.
          </p>
        )}
      </div>
    </div>
  );
};

export default MatchCompanyList;
