import { motion } from "motion/react";
import { Card } from "./ui/card";
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react";
import { Progress } from "./ui/progress";

const results = [
  { label: "Activation Rate", before: 37, after: 71, icon: TrendingUp, color: "green" },
  { label: "Time to Activation", before: "3 days", after: "40 min", icon: Clock, color: "blue" },
  { label: "Support Tickets", before: 100, after: 33, icon: Users, color: "purple", isReduction: true },
  { label: "Monthly Revenue Impact", before: "$0", after: "+$430K", icon: DollarSign, color: "yellow" }
];

export function CaseStudy() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-4">
            <span className="text-blue-700">Case Study</span>
          </div>
          <h2 className="text-4xl mb-4 text-slate-900">The Great Onboarding Resurrection</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            How AnonymousPay transformed a 60% user graveyard into a 71% activation success story
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Story Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-blue-500 to-green-500" />
            
            {/* Chapter 1: The Graveyard */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-20 mb-12"
            >
              <div className="absolute left-5 top-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white">1</span>
              </div>
              <Card className="p-6 border-l-4 border-red-500">
                <h3 className="text-xl mb-2 text-slate-900">Chapter 1: The Graveyard</h3>
                <p className="text-slate-600 mb-4">
                  FinTech startup "AnonymousPay" was bleeding users. Their onboarding was a graveyard—
                  <strong className="text-red-600"> 60% of sign-ups never completed activation</strong>. 
                  The team met weekly to debate why, armed with conflicting data from multiple tools. 
                  Every meeting ended the same: more questions, no answers.
                </p>
                <div className="bg-red-50 rounded p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-red-900">Activation Rate</span>
                    <span className="text-red-600">40%</span>
                  </div>
                  <Progress value={40} className="h-2 bg-red-200" />
                </div>
              </Card>
            </motion.div>

            {/* Chapter 2: The Awakening */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative pl-20 mb-12"
            >
              <div className="absolute left-5 top-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white">2</span>
              </div>
              <Card className="p-6 border-l-4 border-blue-500">
                <h3 className="text-xl mb-2 text-slate-900">Chapter 2: The Awakening</h3>
                <p className="text-slate-600 mb-4">
                  Enter Customer Journey Mapper. In one afternoon, the team built their complete onboarding flow visually. 
                  As they connected stages, the platform inhaled data from all their tools. Suddenly, the journey map came alive—
                  <strong className="text-orange-600"> Stage 3 ("Identity Verification") throbbed angry red. 47% drop-off. 340 user complaints</strong>. 
                  The killer was revealed.
                </p>
                <div className="bg-blue-50 rounded p-4">
                  <div className="text-sm text-blue-900 mb-2">Problem Identified:</div>
                  <div className="flex items-center gap-2 text-blue-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    Identity Verification - 47% drop-off
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Chapter 3: The Surgery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative pl-20 mb-12"
            >
              <div className="absolute left-5 top-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white">3</span>
              </div>
              <Card className="p-6 border-l-4 border-purple-500">
                <h3 className="text-xl mb-2 text-slate-900">Chapter 3: The Surgery</h3>
                <p className="text-slate-600 mb-4">
                  With surgical precision, they created three variants and launched A/B tests to 25% segments each.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-50 rounded p-3 text-center">
                    <div className="text-xs text-slate-500 mb-1">Variant A</div>
                    <div className="text-slate-700">Simplified Form</div>
                  </div>
                  <div className="bg-green-50 rounded p-3 text-center border-2 border-green-500">
                    <div className="text-xs text-green-600 mb-1">Variant B ✓</div>
                    <div className="text-green-700">Progressive Disclosure</div>
                  </div>
                  <div className="bg-slate-50 rounded p-3 text-center">
                    <div className="text-xs text-slate-500 mb-1">Variant C</div>
                    <div className="text-slate-700">Bank Connection</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Chapter 4: The Resurrection */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative pl-20"
            >
              <div className="absolute left-5 top-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white">4</span>
              </div>
              <Card className="p-6 border-l-4 border-green-500">
                <h3 className="text-xl mb-2 text-slate-900">Chapter 4: The Resurrection</h3>
                <p className="text-slate-600 mb-4">
                  48 hours later, Variant B emerged victorious—drop-off plummeted to 18%. 
                  They watched the victory unfold on the impact dashboard—green numbers climbing like a phoenix rising.
                </p>
                <div className="bg-green-50 rounded p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-green-900">New Activation Rate</span>
                    <span className="text-green-600">71%</span>
                  </div>
                  <Progress value={71} className="h-2 bg-green-200" />
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Results Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-2xl text-center mb-6 text-slate-900">Six-Week Transformation</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {results.map((result, index) => {
                const Icon = result.icon;
                
                return (
                  <motion.div
                    key={result.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          result.color === 'green' ? 'bg-green-100' :
                          result.color === 'blue' ? 'bg-blue-100' :
                          result.color === 'purple' ? 'bg-purple-100' : 'bg-yellow-100'
                        }`}>
                          <Icon className={`w-5 h-5 ${
                            result.color === 'green' ? 'text-green-600' :
                            result.color === 'blue' ? 'text-blue-600' :
                            result.color === 'purple' ? 'text-purple-600' : 'text-yellow-600'
                          }`} />
                        </div>
                        <h4 className="text-slate-900">{result.label}</h4>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-slate-500">Before</div>
                          <div className="text-xl text-slate-400">{result.before}</div>
                        </div>
                        <div className="text-2xl text-slate-300">→</div>
                        <div>
                          <div className="text-sm text-slate-500">After</div>
                          <div className="text-xl text-green-600">{result.after}</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <div className="text-6xl text-blue-600">"</div>
                <div>
                  <p className="text-lg text-slate-700 mb-4 italic">
                    Journey Mapper gave us X-ray vision into our user experience. What looked healthy on the surface 
                    had fractures everywhere. The tool didn't just show us problems; it helped us fix them with surgical precision.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white">MW</span>
                    </div>
                    <div>
                      <div className="text-slate-900">Anonymous</div>
                      <div className="text-sm text-slate-600">Chief Experience Officer, AnonymousPay</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
