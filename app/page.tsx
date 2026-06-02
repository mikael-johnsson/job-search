import CompanyList from "./components/CompanyList";
import TechStackList from "./components/TechStackList";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <div className="flex ">
        <CompanyList />
        <TechStackList />
      </div>
    </main>
  );
}
