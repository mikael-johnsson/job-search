import CompanyModel, { Company } from "../models/Company";
import { connectDB } from "../lib/db";
import CompanyListItem from "./CompanyListItem";
import CompanyFilter from "./CompanyFilter";
import { Tech } from "../models/Tech";
import { getTechStacks } from "../lib/techService";

type CompanyListProps = {
  filterFrontendStack: string[];
  filterBackendStack: string[];
  filterTestStack: string[];
  filterDatabaseStack: string[];
  filterOtherStack: string[];
};
const CompanyList = async ({
  filterFrontendStack,
  filterBackendStack,
  filterTestStack,
  filterDatabaseStack,
  filterOtherStack,
}: CompanyListProps) => {
  await connectDB();

  const [frontendTech, backendTech, testTech, databaseTech, otherTech] =
    await getTechStacks();

  // Remove empty values from the user stacks
  const uf = filterFrontendStack.filter(Boolean);
  const ub = filterBackendStack.filter(Boolean);
  const ut = filterTestStack.filter(Boolean);
  const ud = filterDatabaseStack.filter(Boolean);
  const uo = filterOtherStack.filter(Boolean);

  const filters: Record<string, any>[] = [];
  if (uf.length) filters.push({ frontendTechstack: { $in: uf } });
  if (ub.length) filters.push({ backendTechstack: { $in: ub } });
  if (ut.length) filters.push({ testTechstack: { $in: ut } });
  if (ud.length) filters.push({ databaseTechstack: { $in: ud } });
  if (uo.length) filters.push({ otherTechstack: { $in: uo } });

  const query = filters.length ? { $and: filters } : {};
  const companies: Company[] = await CompanyModel.find(query).lean();

  return (
    <div>
      <h2 className="mb-5 text-center text-xl font-bold">Företag</h2>
      <CompanyFilter
        frontendTech={frontendTech}
        backendTech={backendTech}
        testTech={testTech}
        databaseTech={databaseTech}
        otherTech={otherTech}
      />
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
        {companies.map((company) => (
          <CompanyListItem key={company._id} {...company} />
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
