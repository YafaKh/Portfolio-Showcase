import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">About Me</h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I began my career navigating the complexities of banking data at Palestine Islamic Bank, where I transformed sprawling financial datasets into clear, automated reports and executive dashboards. That foundational experience taught me the critical value of data integrity and the power of well-structured insights to drive strategic decisions.
            </p>
            <p>
              Over time, my passion shifted from analyzing data after the fact to building the systems that generate and process it. This drive for deeper technical ownership led me into product engineering. Today, I am co-designing and developing scalable backend features for a cold-email automation platform, utilizing NestJS, Next.js, and PostgreSQL to architect robust campaign workflows and engagement analytics.
            </p>
            <p>
              Whether I'm writing complex SQL queries to unravel data anomalies or building backend services to support automated workflows, my core motivation remains consistent: I thrive on clarity, efficiency, and shipping products that solve real-world problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
