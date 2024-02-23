import css from './Contact.module.css'

export default function Contact({ id, name, number, onDeleteContact }) {
    return (
        <li className={css.contactListItem}>
            <div>
                <ContactInfo>{name}</ContactInfo>
                <ContactInfo>{number}</ContactInfo>
            </div>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
    )
}

function ContactInfo({ children }) {
  return (
    <p>
      <span>{children}</span>
    </p>
  );
}