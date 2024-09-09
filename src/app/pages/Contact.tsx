"use client"
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from "@/hooks/use-toast"


const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactDetails = [
  { icon: FaPhoneAlt, label: "Phone", value: "+91 90153 08881" },
  { icon: FaEnvelope, label: "Email", value: "nitinvermanv61506@gmail.com" },
  { icon: FaMapMarkerAlt, label: "Location", value: "Bilaspur, H.P., India" },
];

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-blue-400">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Get in Touch</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="bg-blue-600 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <p className="text-white mb-8">
                I&apos;m here to assist you with your web development needs. Whether you&apos;re looking to create a new website, enhance an existing one, or bring a unique project to life, let&apos;s discuss how we can work together to achieve your goals.
              </p>
              <ul className="space-y-6">
                {contactDetails.map(({ icon: Icon, label, value }, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Icon className="text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm text-white">{label}</p>
                      <p className="font-medium text-white">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-blue-600 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              <div className="space-y-4">
                {[
                  { name: "name", label: "Your Name", type: "text" },
                  { name: "email", label: "Your Email", type: "email" },
                  { name: "subject", label: "Subject", type: "text" },
                ].map((field) => (
                  <div key={field.name}>
                    <Input
                      {...register(field.name as keyof ContactFormValues)}
                      className="w-full text-white placeholder-white [&::placeholder]:text-white"
                      type={field.type}
                      placeholder={field.label}
                    />
                    {errors[field.name as keyof ContactFormValues] && (
                      <p className="text-red-500 text-sm mt-1">{errors[field.name as keyof ContactFormValues]?.message}</p>
                    )}
                  </div>
                ))}
                <div>
                  <Textarea
                    {...register("message")}
                    className="w-full text-white placeholder-white [&::placeholder]:text-white"
                    placeholder="Your Message"
                    rows={4}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
