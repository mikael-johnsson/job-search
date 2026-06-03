import CompanyList from "./components/CompanyList";
import TechStackList from "./components/TechStackList";

export default function Home() {
  return (
    <main className="mx-10 p-4">
      <div className="flex flex-col justify-between gap-10 lg:flex-row">
        <CompanyList />
        <TechStackList />
      </div>
    </main>
  );
}
