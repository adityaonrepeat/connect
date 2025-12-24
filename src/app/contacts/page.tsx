import React from "react";
import { getSession } from "../_lib/session";
import { getContacts } from "../_services/contact";
import ContactList from "../_components/ContactList";

const ContactsPage = async () => {

  const user = await getSession();

  if(!user) {
    return (
      <div className="flex items-center gap-1.5">
        Please{" "}
        <a href="/login" className="text-blue-600 underline">
          login{" "}
        </a>
        to view your contacts.
      </div>
    );
  }

  const contacts = await getContacts(user?.id);
  if(contacts.length === 0) {
    return (
      <div className="flex items-center gap-1.5">
        Please
        <a href="/contacts/new" className="text-blue-600 underline">
          Add a contact
        </a>
        to view your contact list.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Your <span className="text-blue-700">Contacts</span>
        </h1>
        <a href="/contacts/new" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
          Add Contact
        </a>
      </div>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactsPage;