import { motion } from "motion/react";
import { AlertTriangle } from "lucide-react";

const journeyStages = [
  { label: "Landing", health: 95, color: "#10b981" },
  { label: "Sign Up", health: 82, color: "#3b82f6" },
  { label: "KYC Verify", health: 38, color: "#ef4444" },
  { label: "First Action", health: 71, color: "#f59e0b" }
];

export function FrictionPulse() {
  return (
    <div className="bg-slate-900 rounded-xl p-8 border border-slate-700 relative overflow-hidden">
      <div className="absolute top-4 right-4 text-slate-400 text-sm flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        Real-time monitoring
      </div>

      <div className="space-y-6 mt-8">
        {journeyStages.map((stage, index) => {
          const isProblem = stage.health < 50;
          
          return (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-white">{stage.label}</span>
                  {isProblem && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                    </motion.div>
                  )}
                </div>
                <span className="text-slate-400">{stage.health}% success</span>
              </div>
              
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${stage.health}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="h-full rounded-full relative"
                  style={{ backgroundColor: stage.color }}
                >
                  {isProblem && (
                    <motion.div
                      className="absolute inset-0 bg-red-400"
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              </div>

              {isProblem && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className="mt-2 bg-red-950/50 border border-red-900 rounded p-3"
                >
                  <p className="text-red-300 text-sm">⚠️ 47% drop-off detected • 89 user complaints</p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
