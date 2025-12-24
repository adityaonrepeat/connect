"use client";
import React, { useActionState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { ContactType } from "../_types/contact";

type DeleteButtonProps = {
  action: (prevState: any, formData: FormData) => Promise<any>;
  contact: ContactType;
};

const DeleteButton = ({ action,contact }: DeleteButtonProps ) => {

  const [state, formAction] = useActionState(action, null);

  return (
      <form action={formAction} method="post">
        <input type="hidden" name="id" value={contact?.id} />
          <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md bg-red-600 text-white hover:bg-red-700 transition"
              onClick={(e) => {
                if(!confirm ("Are you sure you want to delete this contact ?")) {
                    e.preventDefault();
                }
              }}
          >
              <FiTrash2 size={16} />
              Delete
          </button>
      </form>
  );
};

export default DeleteButton;