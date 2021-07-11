import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';
import Spinner from '../layouts/Spinner';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered, getContacts, loading } = contactContext;
    

    useEffect(() => {
      getContacts();
      // eslint-disable-next-line
    }, []);


    if (contacts !== null && contacts.length === 0 && !loading) {
      return <h4>Please add a contact</h4>;
    }

    const display = (arr) =>  arr.map(contact => {
        return (
            <CSSTransition 
                key={contact._id}
                timeout={500}
                classNames="item"
            >
                <ContactItem contact={contact} />
            </CSSTransition>
        )
            
    })

    return (
        <Fragment>
            { contacts !==null && !loading ?
                (
                  <TransitionGroup>
                    {filtered !== null ? display(filtered) : display(contacts)}
                  </TransitionGroup>
                ) :
                (
                  <Spinner />
                )
            
            }
        </Fragment>
    )
}

export default Contacts