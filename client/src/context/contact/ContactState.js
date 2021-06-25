import React, {useReducer} from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: '1',
                name: 'Rao',
                email: 'rao@gmail.com',
                phone: '9898989898',
                type: 'personal'
            },
            {
                id: '2',
                name: 'Rao2',
                email: 'rao2@gmail.com',
                phone: '9897989898',
                type: 'personal'
            },
            {
                id: '3',
                name: 'Rao3',
                email: 'rao3@gmail.com',
                phone: '9893989898',
                type: 'professional'
            },
        ],
        current: null,
        filtered: null
    }

    const [state, dispatch ] = useReducer(contactReducer, initialState)

    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({type: ADD_CONTACT, payload: contact})
    }

    const deleteContact = id => {
        dispatch({type: DELETE_CONTACT, payload: id})
    }

    const setCurrent = (contact) => {
        dispatch({type: SET_CURRENT, payload: contact})
    }

    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT})
    }
    
    const updateContact = contact => {
        dispatch({type: UPDATE_CONTACT, payload: contact})
    }

    const filterContacts = text => {
        dispatch({type: FILTER_CONTACTS, payload: text})
    }

    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER})
    }

    return(
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                updateContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                filterContacts,
                clearFilter
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState