import AddOwnStackForm from "../components/AddOwnStackForm";
import MatchCompanyList from "../components/MatchCompanyList";
import { getTechStacks } from "../lib/techService";

type MatchStackPageProps = {
  searchParams: Promise<{
    userFrontendTech?: string | string[];
    userBackendTech?: string | string[];
    userTestTech?: string | string[];
    userDatabaseTech?: string | string[];
    userOtherTech?: string | string[];
  }>;
};

const MatchStackPage = async ({ searchParams }: MatchStackPageProps) => {
  const [frontendTech, backendTech, testTech, databaseTech, otherTech] =
    await getTechStacks();

  const toArray = (v?: string | string[]) => {
    if (!v) return [];
    return Array.isArray(v) ? v : [v];
  };

  const {
    userFrontendTech,
    userBackendTech,
    userTestTech,
    userDatabaseTech,
    userOtherTech,
  } = await searchParams;

  const userFrontEndTechArray = toArray(userFrontendTech);
  const userBackendTechArray = toArray(userBackendTech);
  const userTestTechArray = toArray(userTestTech);
  const userDatabaseTechArray = toArray(userDatabaseTech);
  const userOtherTechArray = toArray(userOtherTech);

  return (
    <main className="mx-10 p-4 flex justify-evenly">
      <AddOwnStackForm
        frontendTech={frontendTech}
        backendTech={backendTech}
        testTech={testTech}
        databaseTech={databaseTech}
        otherTech={otherTech}
      />
      <MatchCompanyList
        frontendTech={userFrontEndTechArray}
        backendTech={userBackendTechArray}
        testTech={userTestTechArray}
        databaseTech={userDatabaseTechArray}
        otherTech={userOtherTechArray}
      />
    </main>
  );
};

export default MatchStackPage;
