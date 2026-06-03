import AddCompanyForm from "@/app/components/AddCompanyForm";
import CompanyModel, { Company } from "@/app/models/Company";

type UpdateCompanyPageProps = {
  params: Promise<{ id: string }>;
};

const UpdateCompanyPage = async ({ params }: UpdateCompanyPageProps) => {
  const { id } = await params;
  const company: Company | null = await CompanyModel.findById(id);
  return (
    <main className="max-w-2xl mx-auto p-4">
      <AddCompanyForm company={company} />
    </main>
  );
};

export default UpdateCompanyPage;
