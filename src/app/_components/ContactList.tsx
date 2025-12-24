import React from "react";
import { ContactType } from "../_types/contact";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import DeleteButton from "./DeleteButton";
import { deleteContactAction } from "../actions/contact";

const ContactList = ({ contacts }: { contacts: ContactType[] }) => {
  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="bg-white p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex justify-between items-center">
            {/* Contact Info */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {contact.name}
              </h2>
              <p className="text-sm text-gray-500">
                {contact.email}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <a
                href={`/contacts/edit/${contact.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                <FiEdit size={16} />
                Edit
              </a>

              <DeleteButton action={deleteContactAction} contact={contact} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
