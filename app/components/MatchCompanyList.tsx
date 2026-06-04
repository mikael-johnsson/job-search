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

  const buildQuery = (params: Record<string, string[]>) => {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, values]) => {
      values.forEach((value) => searchParams.append(key, value));
    });

    return searchParams.toString();
  };

  const queryString = buildQuery({
    userFrontendTech: frontendTech,
    userBackendTech: backendTech,
    userTestTech: testTech,
    userDatabaseTech: databaseTech,
    userOtherTech: otherTech,
  });

  const filters: Record<string, unknown>[] = [];
  if (uf.length) filters.push({ frontendTechstack: { $all: uf } });
  if (ub.length) filters.push({ backendTechstack: { $all: ub } });
  if (ut.length) filters.push({ testTechstack: { $all: ut } });
  if (ud.length) filters.push({ databaseTechstack: { $all: ud } });
  if (uo.length) filters.push({ otherTechstack: { $all: uo } });

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
            Välj din tech stack för att se matchande företag.
          </p>
        ) : companies.length ? (
          companies.map((company) => (
            <CompanyListItem
              key={company._id}
              company={company}
              queryString={queryString}
            />
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
