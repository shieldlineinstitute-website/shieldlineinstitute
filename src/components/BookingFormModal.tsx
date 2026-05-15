import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingFormModal: React.FC<BookingFormModalProps> = ({ isOpen, onClose }) => {
  // Replace "mvzlnpjb" with your actual Formspree form ID from https://formspree.io
  const [state, handleSubmit] = useForm("mvzlnpjb");

  React.useEffect(() => {
    if (state.succeeded) {
      onClose();
    }
  }, [state.succeeded, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] p-4">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#0A2463] hover:text-[#1E3A8A] bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10"
          aria-label="Close booking form"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Form Content */}
        <div className="p-8">
          {state.succeeded ? (
            <div className="rounded-3xl bg-white p-8 shadow-sm max-w-md mx-auto text-center">
              <p className="text-lg text-[#0A2463]">Thanks for your booking request! We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <div>
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
                    Message (Optional)
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
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingFormModal;
