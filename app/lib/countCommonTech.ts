import CompanyModel from "../models/Company";

export const countCommonTech = async () => {
  const mostCommonFrontendTech = await CompanyModel.aggregate([
    { $unwind: "$frontendTechstack" }, // Dela upp arrayerna
    {
      $group: {
        _id: "$frontendTechstack", // Gruppera efter varje tech-stack-sträng
        count: { $sum: 1 }, // Räkna antalet förekomster
      },
    },
    { $sort: { count: -1 } }, // Sortera efter högst antal först
    { $limit: 3 }, // Ta endast den vanligaste
  ]);

  const mostCommonBackendTech = await CompanyModel.aggregate([
    { $unwind: "$backendTechstack" }, // Dela upp arrayerna
    {
      $group: {
        _id: "$backendTechstack", // Gruppera efter varje tech-stack-sträng
        count: { $sum: 1 }, // Räkna antalet förekomster
      },
    },
    { $sort: { count: -1 } }, // Sortera efter högst antal först
    { $limit: 3 }, // Ta endast den vanligaste
  ]);

  const mostCommonTestingTech = await CompanyModel.aggregate([
    { $unwind: "$testTechstack" }, // Dela upp arrayerna
    {
      $group: {
        _id: "$testTechstack", // Gruppera efter varje tech-stack-sträng
        count: { $sum: 1 }, // Räkna antalet förekomster
      },
    },
    { $sort: { count: -1 } }, // Sortera efter högst antal först
    { $limit: 3 }, // Ta endast den vanligaste
  ]);

  const mostCommonDatabaseTech = await CompanyModel.aggregate([
    { $unwind: "$databaseTechstack" }, // Dela upp arrayerna
    {
      $group: {
        _id: "$databaseTechstack", // Gruppera efter varje tech-stack-sträng
        count: { $sum: 1 }, // Räkna antalet förekomster
      },
    },
    { $sort: { count: -1 } }, // Sortera efter högst antal först
    { $limit: 3 }, // Ta endast den vanligaste
  ]);

  const mostCommonOtherTech = await CompanyModel.aggregate([
    { $unwind: "$otherTechstack" }, // Dela upp arrayerna
    {
      $group: {
        _id: "$otherTechstack", // Gruppera efter varje tech-stack-sträng
        count: { $sum: 1 }, // Räkna antalet förekomster
      },
    },
    { $sort: { count: -1 } }, // Sortera efter högst antal först
    { $limit: 3 }, // Ta endast den vanligaste
  ]);

  return [
    mostCommonFrontendTech,
    mostCommonBackendTech,
    mostCommonTestingTech,
    mostCommonDatabaseTech,
    mostCommonOtherTech,
  ];
};
