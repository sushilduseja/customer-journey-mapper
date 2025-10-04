import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const stages = [
  { id: 1, label: "Sign Up", x: 50, y: 100 },
  { id: 2, label: "Email Verify", x: 250, y: 100 },
  { id: 3, label: "Onboarding", x: 450, y: 100 }
];

export function CanvasBuilder() {
  const [activeConnections, setActiveConnections] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeConnections < stages.length - 1) {
        setActiveConnections(prev => prev + 1);
      } else {
        setTimeout(() => setActiveConnections(0), 1000);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [activeConnections]);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 border border-slate-200 relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }} />

      <svg className="w-full h-64 relative">
        {/* Connections */}
        {activeConnections >= 1 && (
          <motion.path
            d="M 170 120 Q 210 120 210 120 L 230 120"
            stroke="#3b82f6"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        )}
        {activeConnections >= 2 && (
          <motion.path
            d="M 370 120 Q 410 120 410 120 L 430 120"
            stroke="#3b82f6"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        )}

        {/* Stages */}
        {stages.map((stage, index) => (
          <g key={stage.id}>
            <motion.rect
              x={stage.x}
              y={stage.y}
              width="120"
              height="40"
              rx="8"
              fill="white"
              stroke="#3b82f6"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.3, type: "spring", stiffness: 200 }}
            />
            <motion.text
              x={stage.x + 60}
              y={stage.y + 25}
              textAnchor="middle"
              className="fill-slate-700"
              style={{ fontSize: '14px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3 + 0.2 }}
            >
              {stage.label}
            </motion.text>
          </g>
        ))}
      </svg>

      <div className="text-center text-sm text-slate-500 mt-4">
        <ArrowRight className="w-4 h-4 inline animate-pulse" /> Drag & drop stages • Auto-connecting paths
      </div>
    </div>
  );
}
