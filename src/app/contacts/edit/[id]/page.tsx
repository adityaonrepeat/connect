import ContactForm from "@/src/app/_components/ContactForm";
import { getContactsById } from "@/src/app/_services/contact";
import { updateContactAction } from "@/src/app/actions/contact";
import { use } from "react";


const EditContactPage = ({ params }: { params: Promise<{ id: string }> }) => {

  const {id} = use(params);
  const contact = use(getContactsById(id));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 -mt-25">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Edit Contact
        </h1>
        <ContactForm action={updateContactAction} contact={contact} />
      </div>
    </div>
  );
};

export default EditContactPage;