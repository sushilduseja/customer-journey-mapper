import { motion } from "motion/react";
import { AlertCircle, Target, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

export function ProblemSolution() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 text-slate-900">The Problem We Solve</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Teams struggle to understand user journeys across 47 different tools. 
            By the time you find the friction, users have already left.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-8 h-full border-2 border-red-200 bg-red-50/30">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl mb-3 text-slate-900">Before: Chaos</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">×</span>
                  <span>6+ disconnected tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">×</span>
                  <span>2-3 week discovery cycles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">×</span>
                  <span>Hidden friction points</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">×</span>
                  <span>Team misalignment</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 h-full border-2 border-blue-200 bg-blue-50/30">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3 text-slate-900">Journey Mapper</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>Single source of truth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>Real-time insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>Visual friction detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>Collaborative canvas</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-8 h-full border-2 border-green-200 bg-green-50/30">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl mb-3 text-slate-900">After: Clarity</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Unified analytics view</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>&lt;5 minute problem discovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>62% drop-off reduction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Team alignment achieved</span>
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
