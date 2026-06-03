import AddOwnStackForm from "./components/AddOwnStackForm";
import CompanyList from "./components/CompanyList";
import CompanyMatch from "./components/CompanyMatch";
import TechStackList from "./components/TechStackList";
import { connectDB } from "./lib/db";
import TechModel, { Tech } from "./models/Tech";

type HomePageProps = {
  params: Promise<{
    frontendTech: string;
    backendTech: string;
    testTech: string;
    databaseTech: string;
    otherTech: string;
  }>;
};

export default async function Home({ params }: HomePageProps) {
  //this does not work atm
  const {
    frontendTech: userFrontendStack,
    backendTech: userBackendStack,
    testTech: userTestStack,
    databaseTech: userDatabaseStack,
    otherTech: userOtherStack,
  } = await params;

  // console.log("Users frontendStack", userFrontendStack);

  // Connect to the database and fetch tech stacks for the forms
  await connectDB();
  const frontendTech: Tech[] = await TechModel.find({
    category: "frontend",
  }).lean();
  const backendTech: Tech[] = await TechModel.find({
    category: "backend",
  }).lean();
  const testTech: Tech[] = await TechModel.find({
    category: "testning",
  }).lean();
  const otherTech: Tech[] = await TechModel.find({ category: "ovrigt" }).lean();
  const databaseTech: Tech[] = await TechModel.find({
    category: "databaser",
  }).lean();

  return (
    <main className="mx-10 p-4">
      <div className="flex flex-col justify-between gap-10 lg:flex-row">
        <CompanyList />
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
