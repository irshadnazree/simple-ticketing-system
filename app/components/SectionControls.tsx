import { Minus, Plus } from 'lucide-react';
import { Section } from '../utils/seatUtils';

interface SectionControlsProps {
  section: Section;
  onUpdate: (change: number) => void;
}

export default function SectionControls({
  section,
  onUpdate,
}: SectionControlsProps) {
  return (
    <div className='mt-2 flex justify-center items-center'>
      <button
        onClick={() => onUpdate(-1)}
        className='p-1 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        aria-label={`Decrease seats in ${section.name} section`}
      >
        <Minus className='w-4 h-4' />
      </button>
      <span className='mx-2'>{section.seatsPerRow} seats</span>
      <button
        onClick={() => onUpdate(1)}
        className='p-1 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        aria-label={`Increase seats in ${section.name} section`}
      >
        <Plus className='w-4 h-4' />
      </button>
    </div>
  );
}
