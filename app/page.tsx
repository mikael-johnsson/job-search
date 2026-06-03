import CompanyList from "./components/CompanyList";
import TechStackList from "./components/TechStackList";

export default function Home() {
  return (
    <main className="mx-10 p-4">
      <div className="flex justify-between gap-10">
        <CompanyList />
        <TechStackList />
      </div>
    </main>
  );
}
