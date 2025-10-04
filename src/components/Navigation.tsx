import { Map, Sparkles, BarChart3, Layers } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Map className="w-6 h-6 text-blue-600" />
          <span className="font-semibold text-slate-900">Customer Journey Mapper</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Features
          </a>
          <a href="#metrics" className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Impact
          </a>
          <a href="#architecture" className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2">
            <Layers className="w-4 h-4" />
            Architecture
          </a>
        </div>
      </div>
    </nav>
  );
}
