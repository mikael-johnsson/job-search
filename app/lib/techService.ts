import TechModel, { Tech } from "../models/Tech";

export const getTechStacks = async () => {
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

  const toClientTech = (items: any[]): Tech[] =>
    items.map((item) => ({
      _id: item._id.toString(),
      name: item.name,
      category: item.category,
    }));

  return [
    toClientTech(frontendTech),
    toClientTech(backendTech),
    toClientTech(testTech),
    toClientTech(otherTech),
    toClientTech(databaseTech),
  ];
};
