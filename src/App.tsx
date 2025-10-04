import { Hero } from "./components/Hero";
import { ProblemSolution } from "./components/ProblemSolution";
import { FeatureShowcase } from "./components/FeatureShowcase";
import { ExperienceWalkthrough } from "./components/ExperienceWalkthrough";
import { MetricsDashboard } from "./components/MetricsDashboard";
import { CaseStudy } from "./components/CaseStudy";
import { ArchitectureDiagrams } from "./components/ArchitectureDiagrams";
import { VisualGallery } from "./components/VisualGallery";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="size-full bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <FeatureShowcase />
      <ExperienceWalkthrough />
      <MetricsDashboard />
      <ArchitectureDiagrams />
      <CaseStudy />
      <VisualGallery />
    </div>
  );
}
