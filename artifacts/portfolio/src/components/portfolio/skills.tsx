import { motion } from "framer-motion";
import { Database, Code, LayoutGrid, Globe } from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Data & Analytics",
    icon: Database,
    items: ["SQL", "Python (Pandas, NumPy, Statsmodels, Matplotlib)", "Power BI", "Tableau", "Excel"]
  },
  {
    title: "Development",
    icon: Code,
    items: ["NestJS", "Next.js", "Laravel", "Bootstrap"]
  },
  {
    title: "Product & Agile Tools",
    icon: LayoutGrid,
    items: ["Bitbucket", "SourceTree", "Jira", "Figma"]
  },
  {
    title: "Languages",
    icon: Globe,
    items: ["Arabic (Native)", "English (Professional)"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground">Tools and technologies I use to build and analyze.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILL_GROUPS.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border p-6 md:p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                  <div className="p-2 bg-primary/10 rounded-md text-primary">
                    <group.icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {group.items.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
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
