"use server";

import { revalidatePath } from "next/cache";
import { createContact, deleteContact, updateContact } from "../_services/contact";
import { getSession } from "../_lib/session";
import { ContactType } from "../_types/contact";

export const createContactAction = async (
    prevState: any,
    formData: FormData 
) => {
    if(!formData) {
        return { error: `Form data is missing` };
    }

    const user = await getSession();
    const NewContact: ContactType = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        userId: user?.id,
    }

    try {
        await createContact(NewContact);
        revalidatePath("/contacts");
        return { success: true };
    } catch (error) {
        console.log("Error creating contact:", error);
        return { error: "Failed to crea te contact" };
    }
};


export const updateContactAction = async (
  prevState: any,
  formData: FormData
) => {
    const id = formData.get("id") as string;

    if (!id) {
        return { error: "Contact id is missing" };
    }

  const user = await getSession();

  const updatedContact: ContactType = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    userId: user?.id,
  };

  try {
    await updateContact(id, updatedContact);
    revalidatePath("/contacts");
    return { success: true };
  } catch (error) {
    console.error("Error updating contact:", error);
    return { error: "Failed to update contact" };
  }
};


export const deleteContactAction = async (
    prevState: any,
    formData: FormData
    
) => {
  const id = formData.get("id") as string;

  if (!id) {
    return { error: "Contact id is missing" };
  }

  try {
    await deleteContact(id);
    revalidatePath("/contacts");
    return { success: true };
  } catch (error) {
    console.log("Error deleting contact:", error);
    return { error: "Failed to delete contact" };
  }
};

