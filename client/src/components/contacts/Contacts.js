import React,{Fragment,useContext} from 'react'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
import ContactItem from './ContactItem'
import ContactContext from '../../context/contact/contactContext'

const Contacts = () => {
    const contactContext = useContext(ContactContext)

    const {contacts,filtered} = contactContext

    if(contacts.length===0){
        return <h4>Please add a contact</h4>
    }

    const display = (arr) =>  arr.map(contact => {
        return (
            <CSSTransition 
                key={contact.id}
                timeout={500}
                classNames="item"
            >
                <ContactItem contact={contact} />
            </CSSTransition>
        )
            
    })

    return (
        <Fragment>
            <TransitionGroup>
                {filtered !== null ? display(filtered) : display(contacts)}
            </TransitionGroup>
        </Fragment>
    )
}

export default Contacts
