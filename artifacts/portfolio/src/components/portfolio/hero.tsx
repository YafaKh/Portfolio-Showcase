import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-secondary/50 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/4" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-muted-foreground mb-6 font-medium"
          >
            <MapPin size={18} className="text-primary" />
            <span>Palestine</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4 leading-tight"
          >
            Yafa Khateeb
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium text-primary mb-8"
          >
            Financial Data Analyst & Product Engineer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl space-y-4"
          >
            <p>
              I bridge the gap between tools, systems, data, and the business, turning operational and financial complexity into something teams can actually use.
            </p>
            <p>
              A Data Analyst with a Computer Science background, I specialize in SQL, Python, and Power BI: automating dashboards, optimizing reporting workflows, and supporting data-driven decisions across teams. I'm drawn to problems with logical depth and clear, real-world impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button asChild size="lg" className="rounded-full text-base px-8">
              <a href="#projects">
                View work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full text-base px-8 border-primary/20 hover:bg-primary/5">
              <a href="mailto:Yafa.khateeb4@gmail.com">
                Get in touch
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
