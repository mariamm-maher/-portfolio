"use client";

import AboutHeader from "./AboutHeader";
import AboutBackground from "./AboutBackground";
import AboutStory from "./AboutStory";
import AboutStats from "./AboutStats";
import AboutSkills from "./AboutSkills";
import AboutCTA from "./AboutCTA";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 relative">
      {/* Background Effects */}
      <AboutBackground />

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <AboutHeader />

        {/* Developer Story */}
        <AboutStory />

        {/* Stats Grid */}
        <AboutStats />

        {/* Skills Section */}
        <AboutSkills />

        {/* Call to Action */}
        <AboutCTA />
      </div>
    </div>
  );
}
