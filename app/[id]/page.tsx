import Link from "next/link";
import CompanyModel, { Company } from "../models/Company";

type CompanyPageProps = {
  params: Promise<{ id: string }>;
};

const CompanyPage = async ({ params }: CompanyPageProps) => {
  const { id } = await params;
  const company: Company = await CompanyModel.findById(id).lean();
  return (
    <main className="max-w-2xl mx-auto p-4">
      <div className="flex mb-4 gap-5 items-center">
        <h1 className="text-3xl font-bold">{company.name}</h1>

        <Link
          href={`/add-company/${company._id}`}
          className="text-blue-500 hover:bg-blue-600 hover:text-white border rounded px-2 py-1"
        >
          Ändra företag
        </Link>
      </div>

      <div>Stad: {company.city}</div>
      <div>Antal anställda: {company.employees}</div>
      <div>
        {company.frontendTechstack.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Frontend Techstack
            </h3>
            <ul className=" list-inside">
              {company.frontendTechstack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div>
        {company.backendTechstack.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Backend Techstack
            </h3>
            <ul className=" list-inside">
              {company.backendTechstack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div>
        {company.testTechstack.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mt-4 mb-2">Test Techstack</h3>
            <ul className=" list-inside">
              {company.testTechstack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div>
        {company.databaseTechstack.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Database Techstack
            </h3>
            <ul className="list-inside">
              {company.databaseTechstack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div>
        {company.otherTechstack.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mt-4 mb-2">Övrig Techstack</h3>
            <ul className=" list-inside">
              {company.otherTechstack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </main>
  );
};

export default CompanyPage;
