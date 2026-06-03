import { Tech } from "../models/Tech";

type AddOwnStackFormProps = {
  frontendTech: Tech[];
  backendTech: Tech[];
  testTech: Tech[];
  databaseTech: Tech[];
  otherTech: Tech[];
};

/**
 * Det här formuläret sätter användarens egna techstack i URL:en
 */
const AddOwnStackForm = async ({
  frontendTech,
  backendTech,
  testTech,
  databaseTech,
  otherTech,
}: AddOwnStackFormProps) => {
  return (
    <div className="bg-white w-120 p-6 rounded border">
      <form action="/" method="GET">
        <h2 className="text-2xl font-bold mb-4">Lägg till egen techstack</h2>
        <fieldset>
          <label className="block mb-2 font-medium">Frontend</label>
          <select
            name="frontendTech"
            multiple
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
          className="bg-blue-500 text-white px-4 py-2 mt-3 rounded hover:bg-blue-600 transition-colors hover:cursor-pointer"
        >
          Lägg till
        </button>
      </form>
    </div>
  );
};

export default AddOwnStackForm;
