import { countCommonTech } from "../lib/countCommonTech";

const TechStackList = async () => {
  const commonFrontendTech = await countCommonTech("frontendTechstack");
  const commonBackendTech = await countCommonTech("backendTechstack");
  const commonTestingTech = await countCommonTech("testTechstack");
  const commonDatabaseTech = await countCommonTech("databaseTechstack");
  const commonOtherTech = await countCommonTech("otherTechstack");

  return (
    <div className="w-full lg:w-1/2 ">
      <h2 className="text-center text-xl font-bold mb-5">Vanligaste tech</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-lg font-semibold">Frontend:</h4>
          <ul>
            {commonFrontendTech.map((tech: any) => (
              <li
                key={tech._id}
                className="mb-2 flex justify-between items-center w-60"
              >
                <span className="font-medium">{tech._id} </span>
                <span className="font-normal">{tech.count} företag</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Backend:</h4>
          <ul>
            {commonBackendTech.map((tech: any) => (
              <li
                key={tech._id}
                className="mb-2 flex justify-between items-center w-60"
              >
                <span className="font-medium">{tech._id} </span>
                <span className="font-normal">{tech.count} företag</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Testing:</h4>
          <ul>
            {commonTestingTech.map((tech: any) => (
              <li
                key={tech._id}
                className="mb-2 flex justify-between items-center w-60"
              >
                <span className="font-medium">{tech._id} </span>
                <span className="font-normal">{tech.count} företag</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Database:</h4>
          <ul>
            {commonDatabaseTech.map((tech: any) => (
              <li
                key={tech._id}
                className="mb-2 flex justify-between items-center w-60"
              >
                <span className="font-medium">{tech._id} </span>
                <span className="font-normal">{tech.count} företag</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Other:</h4>
          <ul>
            {commonOtherTech.map((tech: any) => (
              <li
                key={tech._id}
                className="mb-2 flex justify-between items-center w-60"
              >
                <span className="font-medium">{tech._id} </span>
                <span className="font-normal">{tech.count} företag</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechStackList;
