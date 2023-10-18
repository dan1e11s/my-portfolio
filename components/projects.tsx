import React from 'react';

import Project from './project';
import SectionHeading from './section-heading';

import { projectsData } from '@/lib/data';

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
