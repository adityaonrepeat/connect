import ContactForm from "../../_components/ContactForm";
import { createContactAction } from "../../actions/contact";


const NewContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 -mt-25">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Create New Contact
        </h1>
        <ContactForm action={createContactAction} />
      </div>
    </div>
  );
};

export default NewContactPage;
