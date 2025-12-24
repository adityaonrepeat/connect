"use client";
import React, { useActionState, useEffect } from "react";
import page from "../page";
import { ContactType } from "../_types/contact";
import { useRouter } from "next/navigation";

type ContactFormProps = {
  action: (prevState: any, formData: FormData) => Promise<any>;
  contact?: ContactType;
};

const ContactForm = ({action, contact}: ContactFormProps) => {
    const router = useRouter();
    const [state, formAction] = useActionState(action, null);

    useEffect(() => {
        if (state?.success) {
            router.push("/contacts");
        }
    }, [state, router]);


  return (
    <form action={formAction} className="space-y-5">
        <input type="hidden" name="id" value={contact?.id} />
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              defaultValue={contact?.name || ""}
              placeholder="Enter your name"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2
                         shadow-sm focus:border-blue-500 focus:outline-none
                         focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              defaultValue={contact?.email || ""}
              placeholder="Enter your email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2
                         shadow-sm focus:border-blue-500 focus:outline-none
                         focus:ring-1 focus:ring-blue-500"
            />
          </div>
    
          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white
                       hover:bg-blue-700 transition"
          >
            Save
          </button>
        </form>
  );
};

export default ContactForm;