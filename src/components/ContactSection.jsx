import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with your actual form service endpoint
    const FORM_ENDPOINT = "YOUR_FORM_SERVICE_LINK_HERE"; 

    if (FORM_ENDPOINT === "YOUR_FORM_SERVICE_LINK_HERE") {
        toast({
            title: "Form Service Not Configured",
            description: "Please replace 'YOUR_FORM_SERVICE_LINK_HERE' with your actual form endpoint.",
            variant: "destructive",
        });
        setIsSubmitting(false);
        return;
    }
    
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent! 🚀",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Let's Work <span className="text-portfolio-primary">Together</span></h2>
          <p className="text-lg text-portfolio-muted-foreground max-w-2xl mx-auto">
            I'm currently available for freelance work and full-time positions. If you have a project in mind or just want to chat, feel free to reach out using the form below or via email.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4">Get in Touch</h3>
            <p className="text-portfolio-muted-foreground">
              Fill out the form and I'll get back to you as soon as possible. You can also reach me directly via email or connect on social media.
            </p>
            <div className="space-y-4">
              <Button size="lg" className="w-full justify-start bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white group text-base py-7 px-8" asChild>
                <a href="mailto:contact@naufalnizarudeen.com">
                  <Mail className="mr-3 h-5 w-5" /> contact@naufalnizarudeen.com
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full justify-start border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 group text-base py-7 px-8">
                <Download className="mr-3 h-5 w-5" /> Download Resume
              </Button>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 p-6 sm:p-8 bg-card border border-border rounded-xl shadow-xl"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-1">Full Name</label>
              <Input type="text" name="name" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="bg-input border-border focus:ring-portfolio-primary focus:border-portfolio-primary" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-1">Email Address</label>
              <Input type="email" name="email" id="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required className="bg-input border-border focus:ring-portfolio-primary focus:border-portfolio-primary" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-1">Message</label>
              <Textarea name="message" id="message" rows={5} placeholder="Your message here..." value={formData.message} onChange={handleChange} required className="bg-input border-border focus:ring-portfolio-primary focus:border-portfolio-primary" />
            </div>
            <Button type="submit" size="lg" className="w-full bg-portfolio-primary hover:bg-portfolio-secondary text-primary-foreground group" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;