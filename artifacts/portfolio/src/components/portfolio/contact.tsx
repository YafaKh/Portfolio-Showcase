import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let's build something.</h2>
          <p className="text-xl text-muted-foreground mb-12">Whether you're looking for a product engineer, a data analyst, or just want to connect, my inbox is open.</p>

          <div className="flex justify-center items-center mb-16">
            <Button asChild size="lg" className="w-full sm:w-auto text-base px-8 h-14 rounded-full gap-2">
              <a href="mailto:yafa.khateeb4@gmail.com">
                <Mail size={18} /> yafa.khateeb4@gmail.com
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/yafa-khateeb/"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all shadow-sm hover:shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/YafaKh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all shadow-sm hover:shadow-md"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
