import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Play, Sparkles, Activity, Rocket } from "lucide-react";

const scenes = [
  {
    title: "The Awakening",
    description: "Sarah opens Journey Mapper. Her screen transforms from blank white to a subtle grid—like graph paper waiting for a masterpiece.",
    icon: Sparkles,
    color: "blue"
  },
  {
    title: "The Construction",
    description: "She drags 'Account Creation' from the component dock, drops it center-stage. As she connects stages, a gentle blue line flows between them—like a river finding its path.",
    icon: Play,
    color: "purple"
  },
  {
    title: "The Revelation",
    description: "Suddenly, KYC Verification glows orange. The platform detected a 47% drop-off. 89 user comments appear: 'Too many documents!' The problem that was invisible is now impossible to ignore.",
    icon: Activity,
    color: "red"
  },
  {
    title: "The Transformation",
    description: "Sarah creates a simplified variant. Two paths display side-by-side. She launches the test. Within hours, green numbers rise—drop-off plummets to 22%. Victory.",
    icon: Rocket,
    color: "green"
  }
];

export function ExperienceWalkthrough() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 text-slate-900">Experience Walkthrough</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Follow Sarah's journey as she transforms user experience chaos into clarity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {scenes.map((scene, index) => {
            const Icon = scene.icon;
            
            return (
              <motion.div
                key={scene.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow border-l-4"
                  style={{ borderLeftColor: 
                    scene.color === 'blue' ? '#3b82f6' :
                    scene.color === 'purple' ? '#8b5cf6' :
                    scene.color === 'red' ? '#ef4444' : '#10b981'
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      scene.color === 'blue' ? 'bg-blue-100' :
                      scene.color === 'purple' ? 'bg-purple-100' :
                      scene.color === 'red' ? 'bg-red-100' : 'bg-green-100'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        scene.color === 'blue' ? 'text-blue-600' :
                        scene.color === 'purple' ? 'text-purple-600' :
                        scene.color === 'red' ? 'text-red-600' : 'text-green-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                          Scene {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl mb-2 text-slate-900">{scene.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{scene.description}</p>
                    </div>
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
