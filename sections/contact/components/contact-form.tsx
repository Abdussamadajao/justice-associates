"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { toast } from "sonner";
import {
  Form,
  RHFTextField,
  RHFTextArea,
  RHFSelect,
  RHFPhone,
} from "@/components/hook-forms";
import { LoadingButton } from "@/components/shared/loading-button";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  practiceArea: z.string().min(1, "Please select a practice area"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      practiceArea: "",
      message: "",
    },
  });

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Form Submitted", {
        description:
          "Thank you for contacting us. We'll get back to you shortly.",
      });

      form.reset();
    } catch (error) {
      toast.error("Error", {
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: <MapPin className="h-6 w-6 text-law-gold" />,
      title: "Our Address",
      details:
        "Suite C-007 Quad Plaza, Ameh Ebute Street, Wuye District, FCT-Abuja.",
    },
    {
      icon: <Phone className="h-6 w-6 text-law-gold" />,
      title: "Phone Number",
      details: "+2348022138786",
    },
    {
      icon: <Mail className="h-6 w-6 text-law-gold" />,
      title: "Email Address",
      details: "info@justiceandassociates.com",
    },
    {
      icon: <Clock className="h-6 w-6 text-law-gold" />,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
    },
  ];

  const practiceAreas = [
    { label: "Data Protection and Cybersecurity", value: "data-protection-and-cybersecurity" },
    { label: "Dispute Resolution", value: "dispute-resolution" },
    { label: "Corporate", value: "corporate" },
    { label: "Real Estate", value: "real-estate" },
    { label: "Intellectual Property", value: "intellectual-property" },
    { label: "Investigations", value: "investigations" },
    { label: "Other", value: "other" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <h4 className="text-2xl font-serif font-bold text-law-navy mb-6">
              Request a Consultation
            </h4>

            <Form form={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RHFTextField
                  name="firstName"
                  label="First Name *"
                  inputProps={{
                    placeholder: "John",
                  }}
                />
                <RHFTextField
                  name="lastName"
                  label="Last Name *"
                  inputProps={{
                    placeholder: "Doe",
                  }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RHFTextField
                  name="email"
                  label="Email Address *"
                  inputProps={{
                    type: "email",
                    placeholder: "johndoe@example.com",
                  }}
                />
                <RHFPhone
                  name="phone"
                  label="Phone Number *"
                  placeholder="Enter phone number"
                />
              </div>

              <RHFSelect
                name="practiceArea"
                label="Area of Interest *"
                placeholder="Select practice area"
                options={practiceAreas}
              />

              <RHFTextArea
                name="message"
                label="Your Message *"
                textAreaProps={{
                  placeholder:
                    "Please provide details about your legal issue...",
                  rows: 5,
                }}
              />

              <LoadingButton
                type="submit"
                loading={isSubmitting}
                text={isSubmitting ? "Submitting..." : "Submit Request"}
                className="w-full"
              />

              <p className="text-xs text-gray-500">
                By submitting this form, you agree to our privacy policy and
                terms of service.
              </p>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-8">
            {/* Map */}
            <div className="flex-1 rounded-lg overflow-hidden shadow-lg h-[300px]">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps?q=Quad+Plaza,+Ameh+Ebute+Street,+Wuye,+Abuja,+Nigeria&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Contact details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex p-4 rounded-lg hover:bg-law-light-gray transition-colors"
                >
                  <div className="mr-4 mt-1">{detail.icon}</div>
                  <div>
                    <h5 className="font-serif font-bold text-law-navy">
                      {detail.title}
                    </h5>
                    <p className="text-gray-600 text-sm">{detail.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

