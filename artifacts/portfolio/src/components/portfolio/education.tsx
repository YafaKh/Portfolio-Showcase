import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CERTIFICATIONS = [
  "Programming for Data Science with Python Nanodegree (Udacity)",
  "Advanced Python & Data Analytics with Python (GSG)",
  "Data Manipulation with Python (DataCamp)",
  "Banking Training Program (Palestine Islamic Bank)",
  "Counterfeit & Forgery Detection (Palestinian Banking Institute)"
];

export default function Education() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Education</h2>
              </div>
              
              <Card className="bg-card shadow-sm border-border">
                <CardContent className="p-6">
                  <div className="mb-2 flex justify-between items-start flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-foreground">Bachelor of Science in Computer Science</h3>
                    <span className="text-sm font-medium bg-muted px-2 py-1 rounded-md text-muted-foreground">2019–2023</span>
                  </div>
                  <p className="text-primary font-medium mb-3">Arab American University, Palestine</p>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <span className="font-semibold text-foreground/80">GPA:</span> 3.53 / 4.00
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Award size={24} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Training & Certifications</h2>
              </div>
              
              <Card className="bg-card shadow-sm border-border">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {CERTIFICATIONS.map((cert, index) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0 group-hover:bg-primary transition-colors" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
