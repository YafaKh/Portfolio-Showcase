import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    title: "Product Engineer, Cold Email Platform",
    company: "Proficien",
    date: "Apr 2026 – Present",
    bullets: [
      "Co-designed and currently developing backend features for a scalable cold email automation platform using NestJS, Next.js, and PostgreSQL — including campaign workflows, contact management, and email scheduling.",
      "Supporting data-driven customer acquisition through campaign optimization and engagement analytics."
    ]
  },
  {
    title: "Financial Data Analyst",
    company: "Palestine Islamic Bank",
    date: "Feb 2024 – Mar 2026",
    bullets: [
      "Developed 30+ automated financial reports using SQL, enhanced and customized additional reports for departmental needs, and deployed them on Oracle BI to create a centralized access point — reducing manual reporting time and improving data accessibility.",
      "Built Power BI dashboards for senior management, enabling data-driven decision-making and real-time performance tracking.",
      "Prepared recurring financial reports for senior management, external auditors, and the Palestine Monetary Authority (PMA) using SQL and Excel.",
      "Identified data anomalies, analyzed root causes, and provided justifications for irregularities while continuously monitoring KPIs."
    ]
  },
  {
    title: "Full-Stack Trainee, Personal Portfolio",
    company: "Auxilium Technology",
    date: "Jul 2022 – Aug 2022",
    bullets: [
      "Built a responsive portfolio web application using Laravel and Bootstrap.",
      "Practiced Agile collaboration and led task coordination using Bitbucket, Jira, and SourceTree."
    ]
  },
  {
    title: "Teaching Assistant, AI Agent Bootcamp",
    company: "Zakey Tech",
    date: "Jun 2025 – Present",
    type: "Volunteer",
    bullets: [
      "Supported instruction for a cohort of 80 Palestinian students, reviewing technical content and assisting with Python-based assignments.",
      "Evaluated student projects and provided debugging guidance on data processing and AI workflows."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
          </div>

          <div className="space-y-12 border-l-2 border-border ml-4 md:ml-6 pl-8 md:pl-10 relative">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline node */}
                <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.title}
                      {exp.type && (
                        <span className="ml-3 text-sm font-normal text-muted-foreground italic px-2 py-0.5 bg-muted rounded-full">
                          {exp.type}
                        </span>
                      )}
                    </h3>
                    <p className="text-lg font-medium text-primary">{exp.company}</p>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground whitespace-nowrap bg-muted px-3 py-1 rounded-full w-fit">
                    {exp.date}
                  </span>
                </div>
                
                <ul className="list-disc space-y-2 ml-4 text-muted-foreground">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="pl-2 leading-relaxed">{bullet}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
