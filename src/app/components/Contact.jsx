"use client";

import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        data,
        "YOUR_PUBLIC_KEY"
      );

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  return (
    <section className="relative py-20 px-6 md:px-16 scroll-mt-20" id="contact">
      <Toaster position="top-right" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        <div>
          <h2 className="text-8xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-600 text-lg mb-6 max-w-md">
            Reach out to our fashion team for collaborations, custom orders, or
            general inquiries. We’d love to hear from you.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              Email: <span className="font-medium">support@fashion.com</span>
            </p>
            <p>
              Phone: <span className="font-medium">+62 812-3456-7890</span>
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <Info
              title="Customer Support"
              desc="Available to help you with orders and products."
            />
            <Info
              title="Feedback"
              desc="Your feedback helps us improve our collections."
            />
            <Info title="Media" desc="For collaborations & media inquiries." />
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <h3 className="text-5xl font-semibold mb-3">Get in Touch</h3>
          <p className="text-xl text-gray-500 mb-6">You can reach us anytime</p>

          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="First name"
              error={errors.first_name}
              {...register("first_name", { required: true })}
            />
            <Input
              placeholder="Last name"
              error={errors.last_name}
              {...register("last_name", { required: true })}
            />
          </div>

          <Input
            placeholder="Your email"
            type="email"
            error={errors.email}
            {...register("email", { required: true })}
          />

          <Input
            placeholder="Phone number"
            error={errors.phone}
            {...register("phone")}
          />

          <textarea
            placeholder="How can we help?"
            className="w-full rounded-xl border p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            {...register("message", { required: true })}
          />

          <button
            disabled={isSubmitting}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}

/* REUSABLE COMPONENTS */
function Input({ error, ...props }) {
  return (
    <div>
      <input
        {...props}
        className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      {error && (
        <p className="text-xs text-red-500 mt-1">This field is required</p>
      )}
    </div>
  );
}

function Info({ title, desc }) {
  return (
    <div>
      <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
      <p className="text-lg font-light text-gray-600">{desc}</p>
    </div>
  );
}
