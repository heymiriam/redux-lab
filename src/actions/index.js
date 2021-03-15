import addPerson from "../components/AddPerson/AddPerson";
import { UPDATE_PERSON } from "../constants/action-types";
export function UpdatePerson(payload) {
    return { type: "UPDATE_PERSON", payload }
  };

  export default addPerson;