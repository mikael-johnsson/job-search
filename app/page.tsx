import CompanyList from "./components/CompanyList";
import TechStackList from "./components/TechStackList";
import { connectDB } from "./lib/db";
import { getTechStacks } from "./lib/techService";

type HomePageProps = {
  searchParams: Promise<{
    frontendTechStack?: string | string[];
    backendTechStack?: string | string[];
    testTechStack?: string | string[];
    databaseTechStack?: string | string[];
    otherTechStack?: string | string[];
  }>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const toArray = (v?: string | string[]) => {
    if (!v) return [];
    return Array.isArray(v) ? v : [v];
  };

  const {
    frontendTechStack,
    backendTechStack,
    testTechStack,
    databaseTechStack,
    otherTechStack,
  } = await searchParams;

  const filterFrontendStack = toArray(frontendTechStack);
  const filterBackendStack = toArray(backendTechStack);
  const filterTestStack = toArray(testTechStack);
  const filterDatabaseStack = toArray(databaseTechStack);
  const filterOtherStack = toArray(otherTechStack);

  // Connect to the database and fetch tech stacks for the forms
  await connectDB();

  return (
    <main className="mx-10 p-4">
      <div className="flex flex-col justify-between gap-10 lg:flex-row">
        <CompanyList
          filterFrontendStack={filterFrontendStack}
          filterBackendStack={filterBackendStack}
          filterTestStack={filterTestStack}
          filterDatabaseStack={filterDatabaseStack}
          filterOtherStack={filterOtherStack}
        />
        <TechStackList />
      </div>
      <div className="flex flex-col justify-between gap-10 lg:flex-row mt-10"></div>
    </main>
  );
}
