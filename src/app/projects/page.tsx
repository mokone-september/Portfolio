"use client";

import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers, GripVertical } from "lucide-react";
import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Sortable Project Card Component
const SortableProjectCard = ({ project, index }: { project: any; index: number }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: project.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="flex items-start gap-3 group">
      {/* Drag Handle */}
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing mt-4 p-2 rounded-md hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100"
      >
        <GripVertical className="h-4 w-4 text-gray-400" />
      </div>
      
      {/* Project Card */}
      <div className="flex-1">
        <ProjectCards value={project} num={index} />
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  // Initial projects data with unique IDs
  const initialProjects = [
    {
      id: '1',
      title: "Rock-Paper-Scissors-gamejs",
      description: 'A modern, interactive implementation of the classic Rock-Paper-Scissors game with a clean UI and engaging gameplay',
      tags: ["HTML5", "JavaScript", "Canvas", "CSS"],
      link: "https://rock-paper-scissors-gamejs.vercel.app/",
    },
    {
      id: '2',
      title: "Space-shooter-gamejs",
      description: 'Space Shooter is an interactive game where players control a spaceship to destroy enemy ships while avoiding collisions. The game features increasing difficulty levels, score tracking, and visual effects for an engaging gaming experience.',
      tags: ["HTML5", "JavaScript", "Canvas", "CSS"],
      link: "https://space-shooter-gamejs.vercel.app/",
    },
    {
      id: '3',
      title: "Memory Card Gamejs",
      description: 'A simple memory matching game built with HTML, CSS, and JavaScript.',
      tags: ["HTML5", "JavaScript", "CSS", "Canvas"],
      link: "https://memory-gamejs.vercel.app/",
    },
    {
      id: '4',
      title: "E-commerce Clothing Store",
      description: 'A modern e-commerce clothing store built with React, Vite, and Tailwind CSS. It features a sleek and responsive design, easy navigation, and a seamless shopping experience.',
      tags: ["React", "TypeScript", "TailwindCSS", "API"],
      link: "https://ecommerce-clothing-neon.vercel.app/",
    },
    {
      id: '5',
      title: "Pong-gamejs",
      description: 'A classic Pong game built with React and Tailwind CSS, featuring smooth gameplay and a retro design.',
      tags: ["React", "JavaScript", "TailwindCSS"],
      link: "https://pong-gamejs.vercel.app/",
    },
    {
      id: '6',
      title: "Snake-Gamejs",
      description: 'A classic snake game built with React and Redux, featuring a simple and intuitive interface, and smooth gameplay.',
      tags: ["React", "JavaScript", "Redux"],
      link: "https://snake-gamejs-navy.vercel.app/",
    },
    {
      id: '7',
      title: "ticket-scheduler",
      description: 'Ticket Scheduler is a simple and modern web application for scheduling and tracking tasks or tickets. Built with React, Vite, and Material UI (MUI), it provides an intuitive interface for adding tasks with a date picker, and displays scheduled tickets in a clean, responsive layout.',
      tags: ["Vite", "MUI", "React"],
      link: "https://ticket-scheduler.vercel.app/",
    },
  ];

  const [projects, setProjects] = useState(initialProjects);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setProjects((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  // Reset to original order
  const resetOrder = () => {
    setProjects(initialProjects);
  };

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <div className="flex justify-between items-center w-full">
        <Badge variant="secondary" className="gap-1.5 py-1">
          <Layers className="h-4 w-4" />
          Projects
        </Badge>
        
        {/* Reset Button */}
        <button
          onClick={resetOrder}
          className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
        >
          Reset Order
        </button>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Projects. Here, you&apos;ll find a curated collection of my creative endeavors and technical projects. 
            Each piece represents a journey of innovation, problem-solving, and continuous learning. 
            <span className="block mt-2 text-sm text-gray-600">
              💡 <strong>Tip:</strong> Drag and drop projects to reorder them!
            </span>
          </p>
        </FramerWrapper>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={projects} strategy={verticalListSortingStrategy}>
          <div className="w-full flex flex-col gap-4">
            {projects.map((project, index) => (
              <SortableProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default ProjectsPage;