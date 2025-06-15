'use client';

import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    emailjs
      .send(
        'service_pmxuueb',
        'template_r6gwy2c',
        {
          from_name: formData.get('name'),
          to_name: 'Pranay',
          from_email: formData.get('email'),
          to_email: 'pranayharpalani@icloud.com',
          message: formData.get('message'),
        },
        'k2PLorVMw9_JmUpvA'
      )
      .then(() => {
        setLoading(false);
        toast({
          title: 'Message sent!',
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        formRef.current.reset();
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        toast({
          title: 'Something went wrong',
          description:
            'Please try again or contact me directly at pranayharpalani@icloud.com',
          variant: 'destructive',
        });
      });
  };

  return (
    <section id="contact" className="py-16 lg:py-22 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground">
              Have a project in mind or want to collaborate? Feel free to reach
              out and let's create something amazing together.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl">
            <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-white/5 border-white/10 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    required
                    className="bg-white/5 border-white/10 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  className="bg-white/5 border-white/10 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-white/5 border-white/10 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="glass p-6 text-center">
              <h3 className="font-medium mb-2">Email</h3>
              <a
                href="mailto:pharpala@uoguelph.ca"
                className="text-primary hover:underline"
              >
                pharpala@uoguelph.ca
              </a>
            </div>

            <div className="glass p-6 text-center">
              <h3 className="font-medium mb-2">Location</h3>
              <p className="text-muted-foreground">Toronto, ON</p>
            </div>

            <div className="glass p-6 text-center">
              <h3 className="font-medium mb-2">Social</h3>
              <div className="flex justify-center space-x-4 mt-2">
                <a
                  href="https://github.com/pharpala"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/pranayharpalani/"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
