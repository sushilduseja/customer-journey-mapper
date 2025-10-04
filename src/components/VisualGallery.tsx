import { motion } from "motion/react";
import { Card } from "./ui/card";
import { ExternalLink, Download, Github } from "lucide-react";
import { Button } from "./ui/button";

const galleryItems = [
  {
    title: "Canvas Builder",
    description: "Drag & drop journey stages with auto-connecting paths",
    tag: "Interactive Demo"
  },
  {
    title: "Friction Heatmap",
    description: "Real-time problem detection with pulsing indicators",
    tag: "Live Monitoring"
  },
  {
    title: "Feedback Streams",
    description: "Contextual user comments with sentiment analysis",
    tag: "User Voice"
  },
  {
    title: "Impact Racing",
    description: "A/B test results visualized as competitive charts",
    tag: "Experimentation"
  },
  {
    title: "Persona Morphing",
    description: "Journey adaptation across user archetypes",
    tag: "Segmentation"
  },
  {
    title: "Template Vault",
    description: "Battle-tested blueprints for instant deployment",
    tag: "Quick Start"
  }
];

export function VisualGallery() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 text-slate-900">Visual Asset Gallery</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Explore the complete visual language of Customer Journey Mapper
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-xl transition-all group cursor-pointer h-full">
                <div className="mb-4">
                  <span className="inline-block text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xl mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-4">{item.description}</p>
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <span>View demo</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white text-center">
            <h3 className="text-3xl mb-4">Ready to Transform Your Journey Mapping?</h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              This portfolio showcases a conceptual product designed to demonstrate product thinking, 
              visual design, and user experience expertise.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2">
                <Download className="w-4 h-4" />
                Download Assets
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white/10">
                <Github className="w-4 h-4" />
                View on GitHub
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 text-center text-slate-500">
          <p className="mb-2">Created as a portfolio project to demonstrate:</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="px-3 py-1 bg-slate-200 rounded-full">Product Vision</span>
            <span className="px-3 py-1 bg-slate-200 rounded-full">UX Design</span>
            <span className="px-3 py-1 bg-slate-200 rounded-full">Visual Communication</span>
            <span className="px-3 py-1 bg-slate-200 rounded-full">Storytelling</span>
            <span className="px-3 py-1 bg-slate-200 rounded-full">Metrics-Driven Thinking</span>
          </div>
        </div>
      </div>
    </section>
  );
}
