import AddOwnStackForm from "./components/AddOwnStackForm";
import CompanyList from "./components/CompanyList";
import CompanyMatch from "./components/CompanyMatch";
import TechStackList from "./components/TechStackList";
import { connectDB } from "./lib/db";
import { getTechStacks } from "./lib/techService";
import TechModel, { Tech } from "./models/Tech";

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

  const userFrontendStack = toArray(frontendTechStack);
  const userBackendStack = toArray(backendTechStack);
  const userTestStack = toArray(testTechStack);
  const userDatabaseStack = toArray(databaseTechStack);
  const userOtherStack = toArray(otherTechStack);

  // Connect to the database and fetch tech stacks for the forms
  await connectDB();
  const [frontendTech, backendTech, testTech, databaseTech, otherTech] =
    await getTechStacks();

  return (
    <main className="mx-10 p-4">
      <div className="flex flex-col justify-between gap-10 lg:flex-row">
        <CompanyList
          frontendTech={frontendTech}
          backendTech={backendTech}
          testTech={testTech}
          databaseTech={databaseTech}
          otherTech={otherTech}
          userFrontendStack={userFrontendStack}
          userBackendStack={userBackendStack}
          userTestStack={userTestStack}
          userDatabaseStack={userDatabaseStack}
          userOtherStack={userOtherStack}
        />
        <TechStackList />
      </div>
      {/* <div className="flex flex-col justify-between gap-10 lg:flex-row mt-10">
        <AddOwnStackForm
          frontendTech={frontendTech}
          backendTech={backendTech}
          testTech={testTech}
          databaseTech={databaseTech}
          otherTech={otherTech}
        />
        <CompanyMatch />
      </div> */}
    </main>
  );
}
