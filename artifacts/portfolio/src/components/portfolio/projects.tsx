import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Presentation, Code2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const PROJECTS = [
  {
    id: "masar",
    type: "Live web app",
    title: "Masar",
    description: "A web app built and deployed on Replit using vibe-coding workflows.",
    badges: ["Replit", "React"],
    action: { label: "Visit live site", href: "#", icon: ExternalLink } // TODO: Update with real URL
  },
  {
    id: "clinicflow",
    type: "Replit project",
    title: "ClinicFlow",
    description: "A clinic management workflow prototype built on Replit.",
    badges: ["Replit"],
    action: null // Not deployed
  },
  {
    id: "banking-dashboards",
    type: "Data dashboards",
    title: "Power BI Banking Dashboards",
    description: "Power BI dashboards built for senior management at Palestine Islamic Bank, covering financial KPIs and operational reporting.",
    badges: ["Power BI", "Data Analysis"],
    action: { label: "View Deck", isModal: true }
  },
  {
    id: "bikeshare",
    type: "GitHub",
    title: "bikeshare-usa-analysis",
    description: "Analyze bike share data for Chicago, NYC, and Washington using Python. Compute statistics, explore trends, and build an interactive terminal-based program.",
    badges: ["Python"],
    action: { label: "View on GitHub", href: "https://github.com/YafaKh/bikeshare-usa-analysis", icon: Github }
  },
  {
    id: "lead-scoring",
    type: "GitHub",
    title: "lead-scoring-eda",
    description: "Exploratory data analysis on X Education's lead scoring dataset — conversion trends, segment insights, and marketing recommendations.",
    badges: ["Jupyter Notebook"],
    action: { label: "View on GitHub", href: "https://github.com/YafaKh/lead-scoring-eda", icon: Github }
  },
  {
    id: "neural-net",
    type: "GitHub",
    title: "Training-A-Neural-Network",
    description: "Training a neural network using loss functions, optimizers, and gradient descent in PyTorch.",
    badges: ["Jupyter Notebook", "PyTorch"],
    action: { label: "View on GitHub", href: "https://github.com/YafaKh/Training-A-Neural-Network", icon: Github }
  },
  {
    id: "image-stitching",
    type: "GitHub",
    title: "ai-image-stitching-edge-detection",
    description: "An interactive Python application for image stitching and edge detection using Canny, DoG, and AI-based human detection. Features adjustable morphological operations and a user-friendly GUI.",
    badges: ["Python"],
    action: { label: "View on GitHub", href: "https://github.com/YafaKh/ai-image-stitching-edge-detection", icon: Github }
  },
  {
    id: "investigate-rdb",
    type: "GitHub",
    title: "investigate_rdb",
    description: "Explore a movie rental database using SQL. Analyze data, write queries, and create visualizations to answer business questions in a presentation-ready format.",
    badges: ["SQL"],
    action: { label: "View on GitHub", href: "https://github.com/YafaKh/investigate_rdb", icon: Github }
  },
  {
    id: "training-portal",
    type: "GitHub",
    title: "traning_matching_portal",
    description: "Senior project — a training matching portal.",
    badges: ["PHP", "Blade"],
    action: { label: "View on GitHub", href: "https://github.com/YafaKh/traning_matching_portal", icon: Github }
  },
  {
    id: "restaurant-cp",
    type: "GitHub",
    title: "Resturant_control_panel",
    description: "An admin control panel to manage customers, built with Laravel & Bootstrap.",
    badges: ["Laravel", "Bootstrap"],
    action: { label: "View on GitHub", href: "https://github.com/YafaKh/Resturant_control_panel", icon: Github }
  }
];

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // TODO: Update this constant with the real URL when the file is available
  const DASHBOARD_DECK_URL = ""; 

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Code2 size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of web applications, data analyses, and professional dashboards.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0 gap-2">
            <a href="https://github.com/YafaKh" target="_blank" rel="noopener noreferrer">
              <Github size={16} /> View all on GitHub
            </a>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex h-full"
            >
              <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-md hover:border-primary/30 group">
                <CardHeader>
                  <div className="mb-2">
                    <Badge variant={project.type === "GitHub" ? "secondary" : "default"} className="font-medium tracking-wide">
                      {project.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-sm md:text-base mb-6 text-foreground/80 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.badges.map(badge => (
                      <span key={badge} className="px-2.5 py-0.5 rounded-md bg-secondary/50 text-secondary-foreground text-xs font-medium border border-border/50">
                        {badge}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t border-border/50 bg-muted/20">
                  {project.action ? (
                    project.action.isModal ? (
                      <div className="flex gap-3 w-full">
                        <Button 
                          onClick={() => setIsModalOpen(true)} 
                          className="flex-1 gap-2"
                        >
                          <Presentation size={16} /> Preview slides
                        </Button>
                        <Button variant="outline" asChild className="flex-1 gap-2">
                          <a href="#" download> {/* TODO: replace # with real file path like /assets/banking-dashboards.pdf */}
                            Download deck
                          </a>
                        </Button>
                      </div>
                    ) : (
                      <Button asChild variant="default" className="w-full gap-2">
                        <a href={project.action.href} target={project.action.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                          {project.action.icon && <project.action.icon size={16} />}
                          {project.action.label}
                        </a>
                      </Button>
                    )
                  ) : (
                    <Button variant="secondary" disabled className="w-full">
                      Not deployed
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl w-[90vw] h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Power BI Banking Dashboards</DialogTitle>
            <DialogDescription>
              Preview of financial KPIs and operational reporting dashboards.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex-1 bg-muted rounded-md overflow-hidden relative flex items-center justify-center border border-border">
            {DASHBOARD_DECK_URL ? (
              <iframe 
                src={DASHBOARD_DECK_URL} 
                className="w-full h-full border-0"
                title="Banking Dashboards Presentation"
              />
            ) : (
              <div className="text-center p-8 flex flex-col items-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-sm mb-4">
                  <Presentation className="text-muted-foreground h-8 w-8" />
                </div>
                <h3 className="text-lg font-medium mb-2">Slide preview coming soon</h3>
                <p className="text-muted-foreground text-sm max-w-sm">
                  Yafa will upload the presentation deck here shortly. Check back later to view the Power BI dashboards.
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
