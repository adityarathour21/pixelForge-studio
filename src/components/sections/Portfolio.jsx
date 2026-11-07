import React, { useState } from 'react';
import { Eye, Layers, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { projects, projectCategories } from '../../data/projects';
import { PortfolioModal } from './PortfolioModal';

/**
 * Offline SVG Graphic Thumbnail for each project card
 * Avoids any external image URL reliance
 */
function ProjectThumbnail({ project }) {
  return (
    <div className="relative w-full aspect-[16/10] bg-[#080D18] border-b border-white/10 overflow-hidden flex items-center justify-center p-4 group-hover:border-[#00D9FF]/40 transition-colors">
      {/* Dynamic Background Glow */}
      <div
        className="absolute inset-0 opacity-20 blur-xl transition-opacity group-hover:opacity-35"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${project.accentColor || '#00D9FF'} 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Stylized Abstract UI Wireframe Card (Offline SVG) */}
      <div className="relative w-full max-w-[260px] h-32 rounded-lg bg-[#111827] border border-white/10 p-3 shadow-lg flex flex-col justify-between group-hover:scale-105 transition-transform duration-300">
        {/* Mock Header Dots */}
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-600" />
            <span className="w-2 h-2 rounded-full bg-slate-600" />
            <span className="w-2 h-2 rounded-full bg-slate-600" />
          </div>
          <span className="text-[9px] font-mono text-slate-500 uppercase">{project.category}</span>
        </div>

        {/* Mock Wireframe Bars */}
        <div className="space-y-1.5 my-auto">
          <div className="h-2 rounded bg-white/15 w-3/4" />
          <div className="h-1.5 rounded bg-white/10 w-full" />
          <div className="h-1.5 rounded bg-white/10 w-5/6" />
        </div>

        {/* Mock Card Bottom Elements */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <div
            className="h-1.5 rounded w-12"
            style={{ backgroundColor: project.accentColor || '#00D9FF' }}
          />
          <div className="h-1.5 rounded bg-white/10 w-8" />
        </div>
      </div>

      {/* Top Demo Concept Badge */}
      <div className="absolute top-3 left-3 z-10">
        <Badge variant="sample" size="xs">
          Demo Concept
        </Badge>
      </div>
    </div>
  );
}

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="py-20 lg:py-28 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="Demonstrated Craft"
          title="Curated Concepts &"
          highlight="Recent Work"
          description="Explore our interactive showcase of custom business platforms, responsive e-commerce storefronts, and conversion-focused landing pages."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12" role="tablist" aria-label="Project category filter">
          {projectCategories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                aria-pressed={isSelected}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF] ${
                  isSelected
                    ? 'bg-[#00D9FF] text-[#0B1220] shadow-[0_0_15px_rgba(0,217,255,0.4)]'
                    : 'bg-[#111827] text-slate-400 hover:text-white border border-white/5 hover:border-white/15'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 60}>
              <Card
                className="h-full flex flex-col justify-between group border border-white/5 hover:border-[#00D9FF]/40 transition-all duration-300"
              >
                <div>
                  {/* Generated Offline Thumbnail */}
                  <ProjectThumbnail project={project} />

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                      <span className="text-[#00D9FF]">{project.categoryLabel}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white mb-2 group-hover:text-[#00D9FF] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-400 font-['Inter'] leading-relaxed mb-4 line-clamp-2">
                      {project.shortDescription}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.techTags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-[#0B1220] text-slate-300 text-[11px] font-mono border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-6 pt-0 mt-auto border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="w-full mt-4 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-[#00D9FF] hover:text-[#0B1220] text-slate-200 text-xs font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF]"
                  >
                    <Eye className="w-4 h-4" aria-hidden="true" />
                    <span>View Project Details</span>
                  </button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

      </div>

      {/* Accessible Project Details Modal */}
      <PortfolioModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
