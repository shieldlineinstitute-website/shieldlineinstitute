import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface BookingFormProps {
  onSuccess?: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSuccess }) => {
  const [state, handleSubmit] = useForm("booking-form-id"); // Replace with your actual Formspree form ID

  React.useEffect(() => {
    if (state.succeeded && onSuccess) {
      onSuccess();
    }
  }, [state.succeeded, onSuccess]);

  if (state.succeeded) {
    return (
      <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm max-w-md mx-auto">
        <p className="text-center text-lg text-[#0A2463]">Thanks for your booking request! We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-[#0A2463] mb-6 text-center">Book Now</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-[#0A2463] mb-2">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            className="w-full rounded-2xl border border-[#E2E8F0] px-4 py-3 text-[#0A2463] focus:outline-none focus:ring-2 focus:ring-[#00A896]"
            placeholder="Your full name"
            required
          />
          <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#0A2463] mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="w-full rounded-2xl border border-[#E2E8F0] px-4 py-3 text-[#0A2463] focus:outline-none focus:ring-2 focus:ring-[#00A896]"
            placeholder="Your phone number"
            required
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#0A2463] mb-2">
            Email Address (Optional)
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full rounded-2xl border border-[#E2E8F0] px-4 py-3 text-[#0A2463] focus:outline-none focus:ring-2 focus:ring-[#00A896]"
            placeholder="Your email address"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#0A2463] mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full rounded-2xl border border-[#E2E8F0] px-4 py-3 text-[#0A2463] focus:outline-none focus:ring-2 focus:ring-[#00A896]"
            rows={4}
            placeholder="Any additional message or requirements"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex items-center justify-center w-full bg-[#0A2463] hover:bg-[#1E3A8A] text-white px-6 py-4 rounded-2xl font-semibold transition-colors disabled:opacity-50"
        >
          {state.submitting ? 'Submitting...' : 'Submit Booking Request'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;