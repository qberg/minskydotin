import MyForm from '@/components/forms'

const ContactForm = () => {
  return (
    <div
      className="bg-contact-background rounded-lg border border-secondary"
      style={{ height: 'clamp(25.75rem, 21.975rem + 18.875vw, 44.625rem)' }}
    >
      <MyForm />
    </div>
  )
}

export default ContactForm
