import { motion } from "motion/react";
import { Trophy, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const variants = [
  { name: "Control (A)", initial: 40, final: 43, color: "#94a3b8" },
  { name: "Simplified (B)", initial: 40, final: 78, color: "#10b981", isWinner: true },
  { name: "Alternative (C)", initial: 40, final: 61, color: "#3b82f6" }
];

export function ImpactRace() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setTimeout(() => setProgress(0), 2000);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <h4 className="text-green-900">A/B Test Results</h4>
        </div>
        <div className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
          Live tracking
        </div>
      </div>

      <div className="space-y-4">
        {variants.map((variant, index) => {
          const currentValue = variant.initial + ((variant.final - variant.initial) * progress / 100);
          
          return (
            <div key={variant.name} className="relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-700">{variant.name}</span>
                  {variant.isWinner && progress === 100 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Trophy className="w-4 h-4 text-yellow-500" />
                    </motion.div>
                  )}
                </div>
                <span className="text-sm text-slate-600">
                  {Math.round(currentValue)}% conversion
                </span>
              </div>
              
              <div className="h-10 bg-white rounded-lg overflow-hidden relative border border-slate-200">
                <motion.div
                  className="h-full relative flex items-center justify-end pr-3"
                  style={{ 
                    backgroundColor: variant.color,
                    width: `${(currentValue / 100) * 100}%`
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {variant.isWinner && progress > 80 && (
                    <motion.div
                      className="absolute inset-0 bg-yellow-400"
                      animate={{ opacity: [0, 0.3, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>

      {progress === 100 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 bg-green-100 border border-green-300 rounded-lg p-3 text-center"
        >
          <p className="text-green-800">
            🎉 Variant B wins! <strong>+81% improvement</strong> in conversion
          </p>
        </motion.div>
      )}
    </div>
  );
}
