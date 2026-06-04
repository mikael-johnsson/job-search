import { createCompany, updateCompany } from "../actions/CompanyActions";
import { connectDB } from "../lib/db";
import { getTechStacks } from "../lib/techService";
import { Company } from "../models/Company";

const AddCompanyForm = async ({ company }: { company: Company | null }) => {
  await connectDB();
  const [frontendTech, backendTech, testTech, databaseTech, otherTech] =
    await getTechStacks();

  return (
    <form
      action={
        company?._id ? updateCompany.bind(null, company._id) : createCompany
      }
      className="bg-white w-100 p-6 rounded shadow"
    >
      <h2 className="text-2xl font-bold mb-4">Lägg till arbetsplats</h2>
      <fieldset>
        <legend className="font-semibold mb-2">Allmän information</legend>
        <label className="flex items-center justify-between gap-2 mb-2">
          Namn
          <input
            type="text"
            name="company"
            defaultValue={company?.name ?? ""}
            className="w-60 p-2 border border-gray-300 rounded mt-1"
          />
        </label>
        <label className="flex items-center justify-between gap-2 mb-2">
          Stad
          <input
            type="text"
            name="city"
            defaultValue={company?.city ?? ""}
            className="w-60 p-2 border border-gray-300 rounded mt-1"
          />
        </label>
        <label className="flex items-center justify-between gap-2 mb-2">
          Antal anställda
          <input
            type="number"
            name="employees"
            defaultValue={company?.employees ?? ""}
            className="w-20 p-2 border border-gray-300 rounded mt-1"
          />
        </label>
      </fieldset>
      <fieldset className="mb-4">
        <legend className="font-semibold mb-2">Techstack</legend>
        <label className="block mb-2 font-medium">Frontend</label>
        <select
          name="frontendTech"
          multiple
          defaultValue={company?.frontendTechstack ?? []}
          className="w-45 p-2 border border-gray-300 rounded mt-1"
        >
          {frontendTech.map((tech) => (
            <option key={tech._id} value={tech.name}>
              {tech.name}
            </option>
          ))}
        </select>
        <label className="block mb-2 font-medium">Backend</label>
        <select
          name="backendTech"
          multiple
          defaultValue={company?.backendTechstack ?? []}
          className="w-45 p-2 border border-gray-300 rounded mt-1"
        >
          {backendTech.map((tech) => (
            <option key={tech._id} value={tech.name}>
              {tech.name}
            </option>
          ))}
        </select>
        <label className="block mb-2 font-medium">Testning</label>
        <select
          name="testTech"
          multiple
          defaultValue={company?.testTechstack ?? []}
          className="w-45 p-2 border border-gray-300 rounded mt-1"
        >
          {testTech.map((tech) => (
            <option key={tech._id} value={tech.name}>
              {tech.name}
            </option>
          ))}
        </select>
        <label className="block mb-2 font-medium">Databaser</label>
        <select
          name="databaseTech"
          multiple
          defaultValue={company?.databaseTechstack ?? []}
          className="w-45 p-2 border border-gray-300 rounded mt-1"
        >
          {databaseTech.map((tech) => (
            <option key={tech._id} value={tech.name}>
              {tech.name}
            </option>
          ))}
        </select>
        <label className="block mb-2 font-medium">Övrigt</label>
        <select
          name="otherTech"
          multiple
          defaultValue={company?.otherTechstack ?? []}
          className="w-45 p-2 border border-gray-300 rounded mt-1"
        >
          {otherTech.map((tech) => (
            <option key={tech._id} value={tech.name}>
              {tech.name}
            </option>
          ))}
        </select>
      </fieldset>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors hover:cursor-pointer"
      >
        {company ? "Uppdatera" : "Lägg till"}
      </button>
    </form>
  );
};

export default AddCompanyForm;
