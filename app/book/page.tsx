import Section from '@/components/Section';
import BookingForm from '@/components/BookingForm';

export default function BookPage() {
  return (
    <main>
      <Section title="Book HOTLINE" subtitle="Tell us your date, route, and occasion. We will confirm availability and next steps.">
        <BookingForm />
      </Section>
    </main>
  );
}
