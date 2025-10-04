import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { User, Zap, Building } from "lucide-react";

const personas = [
  {
    name: "New User",
    icon: User,
    color: "#3b82f6",
    stages: ["Discovery", "Sign Up", "Tutorial", "First Action"],
    friction: "Tutorial"
  },
  {
    name: "Power User",
    icon: Zap,
    color: "#f59e0b",
    stages: ["Login", "Dashboard", "Advanced Features", "Customization"],
    friction: "Advanced Features"
  },
  {
    name: "Enterprise Admin",
    icon: Building,
    color: "#8b5cf6",
    stages: ["SSO Login", "Team Setup", "Permissions", "Analytics"],
    friction: "Permissions"
  }
];

export function PersonaMorph() {
  const [activePersona, setActivePersona] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePersona(prev => (prev + 1) % personas.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const current = personas[activePersona];
  const Icon = current.icon;

  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200">
      <div className="flex gap-2 mb-6">
        {personas.map((persona, index) => {
          const PersonaIcon = persona.icon;
          return (
            <button
              key={persona.name}
              onClick={() => setActivePersona(index)}
              className={`flex-1 px-4 py-2 rounded-lg transition-all ${
                activePersona === index
                  ? 'bg-white shadow-md border-2'
                  : 'bg-white/50 border border-orange-200'
              }`}
              style={{
                borderColor: activePersona === index ? persona.color : undefined
              }}
            >
              <PersonaIcon 
                className="w-4 h-4 mx-auto mb-1" 
                style={{ color: persona.color }}
              />
              <span className="text-xs text-slate-700">{persona.name}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activePersona}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white rounded-lg p-4 border-2" style={{ borderColor: current.color }}>
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${current.color}20` }}
              >
                <Icon className="w-5 h-5" style={{ color: current.color }} />
              </div>
              <div>
                <h4 className="text-slate-900">{current.name} Journey</h4>
                <p className="text-xs text-slate-500">Optimized path for this persona</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {current.stages.map((stage, index) => (
                <div key={stage} className="flex items-center flex-1">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    className={`flex-1 px-3 py-2 rounded text-center text-xs ${
                      stage === current.friction
                        ? 'bg-red-100 text-red-700 border border-red-300'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {stage}
                  </motion.div>
                  {index < current.stages.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: index * 0.1 + 0.05 }}
                      className="w-4 h-0.5 mx-1"
                      style={{ backgroundColor: current.color }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-4 text-center text-sm text-orange-600">
        Journey adapts in real-time • {personas.length} personas configured
      </div>
    </div>
  );
}
