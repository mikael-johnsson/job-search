import { createTech } from "../actions/TechActions";

const AddTechForm = () => {
  return (
    <form
      action={createTech}
      className="bg-white flex flex-col gap-2 w-100 p-6 rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4">Lägg till teknologi</h2>
      <label className="flex justify-between items-center gap-2 mb-2">
        Teknologi
        <input
          type="text"
          name="tech"
          className="border border-gray-300 rounded p-2"
        />
      </label>

      <label className="flex gap-2 justify-between items-center mb-2">
        Kategori
        <select name="category" className="border border-gray-300 rounded p-2">
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="testning">Testning</option>
          <option value="databaser">Databaser</option>
          <option value="ovrigt">Övrigt</option>
        </select>
      </label>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Lägg till
      </button>
    </form>
  );
};

export default AddTechForm;
