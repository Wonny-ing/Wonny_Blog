import Hero from '@/components/Hero';
import ContactForm from '@/components/about/ContactForm';

export default function ContactPage() {
  return (
    <section>
      <h2 className='text-3xl text-uPrimary font-semibold mb-10'>Contact</h2>
      <Hero />
      <ContactForm />
    </section>
  );
}
