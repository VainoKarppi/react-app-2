import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

// Export delete item function
export async function action({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
}