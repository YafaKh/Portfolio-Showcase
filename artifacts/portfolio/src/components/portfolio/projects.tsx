import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Presentation, Code2, FileCode2, Database, BarChart3, Brain, Image as ImageIcon, Server } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import masarImg from "@assets/image_1778095868033.png";
import clinicflowImg from "@assets/image_1778095933469.png";
import tendopostImg from "@assets/TendoPost.png";
import powerbiImg from "@/assets/project-powerbi.webp";

type ProjectVisual =
  | { kind: "image"; src: string; alt: string }
  | { kind: "graphic"; gradient: string; icon: typeof Code2; label: string };

type Project = {
  id: string;
  type: string;
  title: string;
  description: string;
  badges: string[];
  visual: ProjectVisual;
  action:
    | { label: string; href: string; icon?: typeof ExternalLink; isModal?: false }
    | { label: string; isModal: true; deckId: string }
    | { label: string; disabled: true }
    | null;
};

const PROJECTS: Project[] = [
  {
    id: "masar",
    type: "Replit project",
    title: "Masar",
    description: "Masar collects honest, firsthand experiences from professionals across different fields and shares them with young people exploring their future. By pairing real career stories with personality insights, Masar helps students and early career seekers find the path that truly matches who they are.",
    badges: ["Replit", "React"],
    visual: { kind: "image", src: masarImg, alt: "Screenshot of the Masar landing page" },
    action: { label: "View case study", isModal: true, deckId: "masar" }
  },
  {
    id: "clinicflow",
    type: "Replit project",
    title: "ClinicFlow",
    description: "ClinicFlow is a calm, bilingual workbench built for the busy private clinic. Bookings, patient logs, billing, and WhatsApp reminders live in one quiet workspace. It replaces paper diaries and scattered chats with one steady place to run the day.",
    badges: ["Replit"],
    visual: { kind: "image", src: clinicflowImg, alt: "Screenshot of the ClinicFlow landing page" },
    action: { label: "View case study", isModal: true, deckId: "clinicflow" }
  },
  {
    id: "tendopost",
    type: "Coming soon",
    title: "Tendopost",
    description: "Cold email & B2B outreach platform built for deliverability at scale — campaign creation, contact management, and full send tracking (opens, clicks, bounces, unsubscribes), without the per-seat pricing of tools like Instantly or Smartlead. Designed the NestJS backend across campaigns, contacts, and sending; built an async email pipeline with BullMQ + Redis including suppression list logic and quota enforcement; and architected click/open tracking via a self-hosted redirect and pixel system.",
    badges: ["NestJS", "Next.js", "PostgreSQL", "Drizzle ORM", "BullMQ", "Redis", "Docker", "Nginx", "Turborepo"],
    visual: { kind: "image", src: tendopostImg, alt: "Screenshot of the TendoPost landing page" },
    action: { label: "Coming live soon", disabled: true }
  },
  {
    id: "banking-dashboards",
    type: "Data dashboards",
    title: "Power BI Banking Dashboards",
    description: "Power BI dashboards built for senior management at Palestine Islamic Bank, covering financial KPIs and operational reporting.",
    badges: ["Power BI", "Data Analysis"],
    visual: { kind: "image", src: powerbiImg, alt: "Preview of a Power BI banking dashboard slide" },
    action: { label: "View Deck", isModal: true, deckId: "powerbi" }
  },
  {
    id: "lead-scoring",
    type: "GitHub",
    title: "lead-scoring-eda",
    description: "Exploratory data analysis on X Education's lead scoring dataset — conversion trends, segment insights, and marketing recommendations.",
    badges: ["Jupyter Notebook"],
    visual: { kind: "graphic", gradient: "from-orange-500/80 to-rose-500/80", icon: BarChart3, label: "Jupyter · EDA" },
    action: { label: "View on GitHub", href: "https://github.com/YafaKh/lead-scoring-eda", icon: Github }
  },
  {
    id: "bikeshare",
    type: "GitHub",
    title: "bikeshare-usa-analysis",
    description: "Analyze bike share data for Chicago, NYC, and Washington using Python. Compute statistics, explore trends, and build an interactive terminal-based program.",
    badges: ["Python"],
    visual: { kind: "graphic", gradient: "from-emerald-500/80 to-teal-600/80", icon: BarChart3, label: "Python · Data" },
    action: { label: "View on GitHub", href: "https://github.com/YafaKh/bikeshare-usa-analysis", icon: Github }
  },
  {
    id: "neural-net",
    type: "GitHub",
    title: "Training-A-Neural-Network",
    description: "Training a neural network using loss functions, optimizers, and gradient descent in PyTorch.",
    badges: ["Jupyter Notebook", "PyTorch"],
    visual: { kind: "graphic", gradient: "from-fuchsia-500/80 to-indigo-600/80", icon: Brain, label: "PyTorch · ML" },
    action: { label: "View on GitHub", href: "https://github.com/YafaKh/Training-A-Neural-Network", icon: Github }
  },
  {
    id: "image-stitching",
    type: "GitHub",
    title: "ai-image-stitching-edge-detection",
    description: "An interactive Python application for image stitching and edge detection using Canny, DoG, and AI-based human detection. Features adjustable morphological operations and a user-friendly GUI.",
    badges: ["Python"],
    visual: { kind: "graphic", gradient: "from-sky-500/80 to-blue-700/80", icon: ImageIcon, label: "Python · Vision" },
    action: { label: "View on GitHub", href: "https://github.com/YafaKh/ai-image-stitching-edge-detection", icon: Github }
  },
  {
    id: "investigate-rdb",
    type: "GitHub",
    title: "investigate_rdb",
    description: "Explore a movie rental database using SQL. Analyze data, write queries, and create visualizations to answer business questions in a presentation-ready format.",
    badges: ["SQL"],
    visual: { kind: "graphic", gradient: "from-amber-500/80 to-orange-600/80", icon: Database, label: "SQL · Analysis" },
    action: { label: "View on GitHub", href: "https://github.com/YafaKh/investigate_rdb", icon: Github }
  },
  {
    id: "training-portal",
    type: "GitHub",
    title: "traning_matching_portal",
    description: "Senior project — a training matching portal.",
    badges: ["PHP", "Blade"],
    visual: { kind: "graphic", gradient: "from-violet-500/80 to-purple-700/80", icon: Server, label: "PHP · Blade" },
    action: { label: "View on GitHub", href: "https://github.com/YafaKh/traning_matching_portal", icon: Github }
  },
  {
    id: "restaurant-cp",
    type: "GitHub",
    title: "Resturant_control_panel",
    description: "An admin control panel to manage customers, built with Laravel & Bootstrap.",
    badges: ["Laravel", "Bootstrap"],
    visual: { kind: "graphic", gradient: "from-red-500/80 to-rose-700/80", icon: FileCode2, label: "Laravel · Bootstrap" },
    action: { label: "View on GitHub", href: "https://github.com/YafaKh/Resturant_control_panel", icon: Github }
  }
];

function ProjectVisualBlock({ visual }: { visual: ProjectVisual }) {
  if (visual.kind === "image") {
    return (
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
        <img
          src={visual.src}
          alt={visual.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </div>
    );
  }
  const Icon = visual.icon;
  return (
    <div className={`relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br ${visual.gradient}`}>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.6) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.4) 0, transparent 35%)"
      }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="h-14 w-14 text-white/90 drop-shadow-md transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-3 left-4 text-xs font-medium uppercase tracking-wider text-white/90">
        {visual.label}
      </div>
    </div>
  );
}

const DECKS: Record<string, { title: string; description: string; fileName: string; buttonLabel: string }> = {
  masar: {
    title: "Masar — Case Study",
    description: "How Masar pairs firsthand career stories with personality insights for young job seekers.",
    fileName: "masar-case-study.pdf",
    buttonLabel: "View case study"
  },
  clinicflow: {
    title: "ClinicFlow — Case Study",
    description: "A calm, bilingual booking and billing workbench built for private clinics.",
    fileName: "clinicflow-case-study.pdf",
    buttonLabel: "View case study"
  },
  powerbi: {
    title: "Power BI Banking Dashboards",
    description: "Preview of financial KPIs and operational reporting dashboards.",
    fileName: "banking-dashboards.pdf",
    buttonLabel: "View Deck"
  }
};

export default function Projects() {
  const [openDeckId, setOpenDeckId] = useState<string | null>(null);
  const openDeck = openDeckId ? DECKS[openDeckId] : null;
  const openDeckUrl = openDeck ? `${import.meta.env.BASE_URL}assets/${openDeck.fileName}` : null;

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
              <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-md hover:border-primary/30 group p-0">
                <ProjectVisualBlock visual={project.visual} />
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
                    "disabled" in project.action ? (
                      <Button variant="secondary" disabled className="w-full">
                        {project.action.label}
                      </Button>
                    ) : project.action.isModal ? (
                      (() => {
                        const deckId = project.action.deckId;
                        const deck = DECKS[deckId];
                        return (
                          <div className="flex flex-col gap-2 w-full">
                            <Button onClick={() => setOpenDeckId(deckId)} className="w-full gap-2">
                              <Presentation size={16} /> {deck.buttonLabel}
                            </Button>
                            <Button variant="outline" asChild className="w-full gap-2">
                              <a href={`${import.meta.env.BASE_URL}assets/${deck.fileName}`} download={deck.fileName}>
                                Download PDF
                              </a>
                            </Button>
                          </div>
                        );
                      })()
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

      <Dialog open={openDeckId !== null} onOpenChange={(open) => setOpenDeckId(open ? openDeckId : null)}>
        <DialogContent className="max-w-4xl w-[90vw] h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>{openDeck?.title}</DialogTitle>
            <DialogDescription>{openDeck?.description}</DialogDescription>
          </DialogHeader>

          <div className="flex-1 bg-muted rounded-md overflow-hidden relative flex items-center justify-center border border-border">
            {openDeckUrl && (
              <iframe
                src={openDeckUrl}
                className="w-full h-full border-0"
                title={openDeck?.title}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
