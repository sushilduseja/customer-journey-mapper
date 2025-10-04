import { motion } from "motion/react";
import { Card } from "./ui/card";
import { TrendingUp, Clock, Users, Target, Zap, Heart } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const metricsComparison = [
  { metric: "Hidden Friction Points", before: 7, after: 0, icon: Target },
  { metric: "Avg Drop-off Rate", before: 43, after: 19, icon: TrendingUp, unit: "%" },
  { metric: "Issue Discovery Time", before: 168, after: 5, icon: Clock, unit: "hrs" },
  { metric: "User Satisfaction (NPS)", before: 31, after: 67, icon: Heart }
];

const adoptionData = [
  { month: "Month 1", teams: 10 },
  { month: "Month 2", teams: 35 },
  { month: "Month 3", teams: 142 },
  { month: "Month 4", teams: 500 }
];

const journeyHealthData = [
  { stage: "Discovery", before: 78, after: 92 },
  { stage: "Sign Up", before: 61, after: 85 },
  { stage: "Verification", before: 38, after: 81 },
  { stage: "Activation", before: 45, after: 76 }
];

export function MetricsDashboard() {
  return (
    <section id="metrics" className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 text-slate-900">Transformation Metrics</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real-world impact across teams using Customer Journey Mapper
          </p>
        </motion.div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metricsComparison.map((metric, index) => {
            const Icon = metric.icon;
            const improvement = metric.unit === '%' 
              ? metric.before - metric.after 
              : metric.after - metric.before;
            const isPositive = metric.unit === '%' ? improvement > 0 : improvement > 0;
            
            return (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-5 h-5 text-blue-600" />
                    <h4 className="text-sm text-slate-600">{metric.metric}</h4>
                  </div>
                  
                  <div className="flex items-end gap-4">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Before</div>
                      <div className="text-2xl text-slate-400">
                        {metric.before}{metric.unit || ''}
                      </div>
                    </div>
                    
                    <div className="text-3xl text-slate-300">→</div>
                    
                    <div>
                      <div className="text-sm text-slate-500 mb-1">After</div>
                      <div className="text-2xl text-green-600">
                        {metric.after}{metric.unit || ''}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`mt-3 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'} flex items-center gap-1`}>
                    <TrendingUp className="w-4 h-4" />
                    {Math.abs(improvement)}{metric.unit || ''} improvement
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Adoption Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-purple-600" />
                <h3 className="text-xl text-slate-900">Adoption Velocity</h3>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={adoptionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                  />
                  <Bar dataKey="teams" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-slate-500 text-center mt-2">
                Hockey stick growth • 500+ teams in 4 months
              </p>
            </Card>
          </motion.div>

          {/* Journey Health Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-green-600" />
                <h3 className="text-xl text-slate-900">Journey Health Improvement</h3>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={journeyHealthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="stage" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="before" 
                    stroke="#94a3b8" 
                    strokeWidth={2}
                    name="Before"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="after" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    name="After"
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-sm text-slate-500 text-center mt-2">
                Average 38% improvement across all journey stages
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
