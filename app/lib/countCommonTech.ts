import CompanyModel from "../models/Company";

export const countCommonTech = async (techStack: string) => {
  const mostCommonTech = await CompanyModel.aggregate([
    { $unwind: `$${techStack}` }, // Dela upp arrayerna
    {
      $group: {
        _id: `$${techStack}`, // Gruppera efter varje tech-stack-sträng
        count: { $sum: 1 }, // Räkna antalet förekomster
      },
    },
    { $sort: { count: -1 } }, // Sortera efter högst antal först
    { $limit: 3 }, // Ta endast de tre vanligaste
  ]);

  return mostCommonTech;
};
