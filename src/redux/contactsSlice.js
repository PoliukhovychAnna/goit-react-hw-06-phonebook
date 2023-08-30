import { createSlice, nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.find(contact =>
          contact.name.toLowerCase().includes(action.payload.name.toLowerCase())
            ? toast.warn(`${action.payload.name} is already in contacts`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              })
            : state.unshift(action.payload)
        );
      },
      prepare(data) {
        return {
          payload: { id: nanoid(), ...data },
        };
      },
    },

    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
