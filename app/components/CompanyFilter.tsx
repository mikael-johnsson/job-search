"use client";

import Link from "next/link";
import { Tech } from "../models/Tech";

type CompanyFilterProps = {
  frontendTech: Tech[];
  backendTech: Tech[];
  testTech: Tech[];
  databaseTech: Tech[];
  otherTech: Tech[];
};
const CompanyFilter = ({
  frontendTech,
  backendTech,
  testTech,
  databaseTech,
  otherTech,
}: CompanyFilterProps) => {
  return (
    <form className="bg-white p-6 rounded  mb-5">
      <fieldset>
        <legend className="font-semibold mb-2 text-center">Filtrera</legend>
        <div className="mb-4 grid gap-6 md:grid-cols-3">
          <div>
            <label className="block font-medium">Frontend</label>
            <select
              name="frontendTechStack"
              multiple
              className="w-45 h-15 p-2 border border-gray-300 rounded mt-1"
            >
              {frontendTech.map((tech) => (
                <option key={tech._id} value={tech.name}>
                  {tech.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-medium">Backend</label>
            <select
              name="backendTechStack"
              multiple
              className="w-45 h-15 p-2 border border-gray-300 rounded mt-1"
            >
              {backendTech.map((tech) => (
                <option key={tech._id} value={tech.name}>
                  {tech.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-medium">Testning</label>
            <select
              name="testTechStack"
              multiple
              className="w-45 h-15 p-2 border border-gray-300 rounded mt-1"
            >
              {testTech.map((tech) => (
                <option key={tech._id} value={tech.name}>
                  {tech.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-medium">Databaser</label>
            <select
              name="databaseTechStack"
              multiple
              className="w-45 h-15 p-2 border border-gray-300 rounded mt-1"
            >
              {databaseTech.map((tech) => (
                <option key={tech._id} value={tech.name}>
                  {tech.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-medium">Övrigt</label>
            <select
              name="otherTechStack"
              multiple
              className="w-45 h-15 p-2 border border-gray-300 rounded mt-1"
            >
              {otherTech.map((tech) => (
                <option key={tech._id} value={tech.name}>
                  {tech.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>
      <div className="flex gap-4 justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded inline-block"
        >
          Filtrera
        </button>
        <Link
          href="/"
          className="bg-gray-200 text-gray-800 p-2 rounded inline-block"
        >
          Rensa filter
        </Link>
      </div>
    </form>
  );
};

export default CompanyFilter;
