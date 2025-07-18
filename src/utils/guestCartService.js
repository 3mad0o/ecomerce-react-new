import { v4 as uuidv4 } from 'uuid';


export const getOrCreateGuestId = () => {
  let guestId = localStorage.getItem("guest_id");
  if (!guestId) {
    guestId = uuidv4    (); // or use uuid library
    localStorage.setItem("guest_id", guestId);
  }
  return guestId;
};
