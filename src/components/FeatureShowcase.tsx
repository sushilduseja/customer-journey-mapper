import { motion } from "motion/react";
import { Palette, Flame, MessageSquare, BarChart3, Users, Package } from "lucide-react";
import { Card } from "./ui/card";
import { CanvasBuilder } from "./visuals/CanvasBuilder";
import { FrictionPulse } from "./visuals/FrictionPulse";
import { FeedbackStream } from "./visuals/FeedbackStream";
import { ImpactRace } from "./visuals/ImpactRace";
import { PersonaMorph } from "./visuals/PersonaMorph";
import { TemplateVault } from "./visuals/TemplateVault";

const features = [
  {
    icon: Palette,
    title: "Visual Journey Canvas",
    description: "Drag stages like puzzle pieces onto an infinite grid. Watch connections form automatically.",
    component: CanvasBuilder,
    color: "blue"
  },
  {
    icon: Flame,
    title: "Friction Heatmapping",
    description: "Problem zones pulse red in real-time, drawing your eye exactly where users stumble.",
    component: FrictionPulse,
    color: "red"
  },
  {
    icon: MessageSquare,
    title: "Contextual Feedback Streams",
    description: "User voices appear as floating annotations beside each journey step.",
    component: FeedbackStream,
    color: "purple"
  },
  {
    icon: BarChart3,
    title: "Impact Measurement Theater",
    description: "A/B variants race across animated charts, showing which path wins.",
    component: ImpactRace,
    color: "green"
  },
  {
    icon: Users,
    title: "Scenario Simulator",
    description: "Toggle between user personas; watch the journey morph for each archetype.",
    component: PersonaMorph,
    color: "orange"
  },
  {
    icon: Package,
    title: "Template Marketplace",
    description: "Start with battle-tested blueprints from SaaS onboarding to e-commerce checkout.",
    component: TemplateVault,
    color: "indigo"
  }
];

export function FeatureShowcase() {
  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 text-slate-900">Platform Highlights</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Six powerful features that transform how teams understand and optimize user journeys
          </p>
        </motion.div>

        <div className="grid gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const Visual = feature.component;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`p-8 grid md:grid-cols-2 gap-8 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
                  <div className={isEven ? '' : 'md:col-start-2'}>
                    <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 text-${feature.color}-600`} />
                    </div>
                    <h3 className="text-2xl mb-3 text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                  <div className={`${isEven ? '' : 'md:col-start-1 md:row-start-1'}`}>
                    <Visual />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
