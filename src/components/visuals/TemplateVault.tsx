import { motion } from "motion/react";
import { Star, Download, Eye } from "lucide-react";

const templates = [
  {
    name: "SaaS Onboarding",
    rating: 4.8,
    uses: 500,
    category: "Product",
    gradient: "from-blue-400 to-blue-600"
  },
  {
    name: "E-commerce Checkout",
    rating: 4.9,
    uses: 732,
    category: "Commerce",
    gradient: "from-green-400 to-emerald-600"
  },
  {
    name: "B2B Sales Cycle",
    rating: 4.7,
    uses: 345,
    category: "Sales",
    gradient: "from-purple-400 to-purple-600"
  },
  {
    name: "Mobile App Activation",
    rating: 4.6,
    uses: 421,
    category: "Mobile",
    gradient: "from-orange-400 to-red-600"
  }
];

export function TemplateVault() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-indigo-900">Template Marketplace</h4>
        <span className="text-sm text-indigo-600">{templates.length}+ templates</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {templates.map((template, index) => (
          <motion.div
            key={template.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="group cursor-pointer"
          >
            <div className="bg-white rounded-lg overflow-hidden border border-indigo-200 shadow-sm hover:shadow-md transition-shadow">
              {/* Template preview */}
              <div className={`h-24 bg-gradient-to-br ${template.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full">
                    <path d="M 10 60 L 40 60 L 70 60 L 100 60" stroke="white" strokeWidth="2" fill="none" />
                    <circle cx="25" cy="60" r="8" fill="white" />
                    <circle cx="55" cy="60" r="8" fill="white" />
                    <circle cx="85" cy="60" r="8" fill="white" />
                  </svg>
                </div>
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs">{template.rating}</span>
                </div>
              </div>

              {/* Template info */}
              <div className="p-3">
                <h5 className="text-sm text-slate-900 mb-1">{template.name}</h5>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">
                    {template.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    {template.uses}
                  </span>
                </div>
              </div>

              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-indigo-600/10 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="bg-white rounded-full p-3 shadow-lg">
                  <Eye className="w-5 h-5 text-indigo-600" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 text-center text-sm text-indigo-600">
        Community-tested • Battle-proven • Ready to customize
      </div>
    </div>
  );
}
