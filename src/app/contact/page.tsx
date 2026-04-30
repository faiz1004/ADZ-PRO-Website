
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Contact } from '@/components/sections/Contact';

export const metadata = {
  title: 'Contact Us | Get in Touch with Adz Pro',
  description: 'Reach out for a free consultation. Based in Bijwasan, New Delhi.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
