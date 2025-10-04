import { motion } from "motion/react";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-blue-700">Portfolio Project</span>
          </div>
          
          <h1 className="text-6xl mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            Customer Journey Mapper
          </h1>
          
          <p className="text-3xl text-slate-700 mb-4">
            Turning Journey Chaos into Visual Clarity
          </p>
          
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            A no-code visual platform that transforms fragmented user journey insights into living, 
            actionable maps—where friction points glow, feedback flows, and improvements measure themselves.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              Explore Visuals
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Github className="w-4 h-4" />
              View on GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
