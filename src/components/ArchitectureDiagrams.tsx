import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Database, Workflow, TrendingUp, Network } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function ArchitectureDiagrams() {
  return (
    <section id="architecture" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 text-slate-900">Product Architecture</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Visual representations of system design, data flow, and value transformation
          </p>
        </motion.div>

        <Tabs defaultValue="system" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="system">System Symphony</TabsTrigger>
            <TabsTrigger value="flow">User Flow</TabsTrigger>
            <TabsTrigger value="value">Value Chain</TabsTrigger>
          </TabsList>

          <TabsContent value="system">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Network className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl text-slate-900">System Symphony</h3>
                </div>
                
                <div className="relative">
                  {/* Central Canvas */}
                  <div className="text-center mb-8">
                    <div className="inline-block bg-blue-50 border-2 border-blue-600 rounded-xl px-8 py-4">
                      <h4 className="text-blue-900">Journey Canvas</h4>
                      <p className="text-sm text-blue-600">Visual orchestration layer</p>
                    </div>
                  </div>

                  {/* Three pillars */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-2 h-16 bg-gradient-to-b from-blue-600 to-green-600 mx-auto mb-4" />
                      <Card className="p-6 bg-green-50 border-green-200">
                        <Database className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <h4 className="text-green-900 mb-2">Analytics Engine</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Drop rate calculation</li>
                          <li>• Time-on-stage tracking</li>
                          <li>• Conversion metrics</li>
                        </ul>
                      </Card>
                    </div>

                    <div className="text-center">
                      <div className="w-2 h-16 bg-gradient-to-b from-blue-600 to-purple-600 mx-auto mb-4" />
                      <Card className="p-6 bg-purple-50 border-purple-200">
                        <Workflow className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <h4 className="text-purple-900 mb-2">Feedback Hub</h4>
                        <ul className="text-sm text-purple-700 space-y-1">
                          <li>• Comment aggregation</li>
                          <li>• Survey integration</li>
                          <li>• Support ticket parsing</li>
                        </ul>
                      </Card>
                    </div>

                    <div className="text-center">
                      <div className="w-2 h-16 bg-gradient-to-b from-blue-600 to-orange-600 mx-auto mb-4" />
                      <Card className="p-6 bg-orange-50 border-orange-200">
                        <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                        <h4 className="text-orange-900 mb-2">Integration Layer</h4>
                        <ul className="text-sm text-orange-700 space-y-1">
                          <li>• Google Analytics</li>
                          <li>• Mixpanel</li>
                          <li>• Zendesk & Custom APIs</li>
                        </ul>
                      </Card>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="flow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Workflow className="w-6 h-6 text-purple-600" />
                  <h3 className="text-2xl text-slate-900">User Flow River</h3>
                </div>

                <div className="space-y-6">
                  {/* Flow stages */}
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <FlowNode label="Start" color="blue" />
                    <FlowArrow />
                    <FlowNode label="Choose Template" color="purple" />
                    <FlowArrow />
                    <FlowNode label="Customize Stages" color="green" />
                    <FlowArrow />
                    <FlowNode label="Add Connections" color="orange" />
                  </div>

                  <div className="text-center text-slate-400">↓</div>

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <FlowNode label="Review Analytics" color="indigo" />
                    <FlowArrow bidirectional />
                    <FlowNode label="Test Variants" color="pink" />
                    <FlowArrow bidirectional />
                    <FlowNode label="Apply Feedback" color="cyan" />
                  </div>

                  <div className="text-center text-slate-400">↓</div>

                  <div className="flex items-center justify-center">
                    <FlowNode label="Export & Share" color="green" size="large" />
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="value">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <h3 className="text-2xl text-slate-900">Value Transformation</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Before */}
                  <div className="text-center">
                    <div className="bg-red-100 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center relative">
                      <div className="absolute inset-4 border-4 border-dashed border-red-400 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
                      <span className="text-3xl">😵</span>
                    </div>
                    <h4 className="text-red-900 mb-2">Before: Chaos</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• 6 disconnected tools</li>
                      <li>• 2-week analysis cycles</li>
                      <li>• Guessing & hoping</li>
                      <li>• Team silos</li>
                    </ul>
                  </div>

                  {/* Transformation */}
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-3xl">⚡</span>
                      </div>
                      <div className="absolute -right-2 -top-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-sm">AI</span>
                      </div>
                    </div>
                  </div>

                  {/* After */}
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20" />
                      <span className="text-3xl">🎯</span>
                    </div>
                    <h4 className="text-green-900 mb-2">After: Clarity</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Single source of truth</li>
                      <li>• Real-time insights</li>
                      <li>• Data-driven decisions</li>
                      <li>• Team alignment</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function FlowNode({ label, color, size = "normal" }: { label: string; color: string; size?: "normal" | "large" }) {
  const sizeClasses = size === "large" ? "px-8 py-4 text-lg" : "px-6 py-3";
  
  return (
    <div className={`${sizeClasses} bg-white border-2 rounded-lg shadow-sm`}
      style={{ borderColor: `var(--color-${color}-500, #3b82f6)` }}>
      <span className="text-slate-900">{label}</span>
    </div>
  );
}

function FlowArrow({ bidirectional = false }: { bidirectional?: boolean }) {
  return (
    <div className="text-slate-400">
      {bidirectional ? '⇄' : '→'}
    </div>
  );
}
