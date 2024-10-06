import { useCallback, useState } from 'react';

import { Seat, Section, generateSeats } from '../utils/seatUtils';
import CinemaScreen from './CinemaScreen';
import Legend from './Legend';
import SeatButton from './SeatButton';

const initialSections: Section[] = [
  { name: 'Front', rows: ['A', 'B', 'C', 'D'], seatsPerRow: 12 },
  { name: 'Middle', rows: ['E', 'F', 'G', 'H'], seatsPerRow: 12 },
  { name: 'Back', rows: ['I', 'J', 'K'], seatsPerRow: 12 },
];

export default function SeatingLayout() {
  const [sections] = useState<Section[]>(initialSections);
  const [seats, setSeats] = useState<Seat[]>(generateSeats(sections));
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatClick = useCallback((seatId: string) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === seatId && !seat.isOccupied
          ? { ...seat, isSelected: !seat.isSelected }
          : seat
      )
    );

    setSelectedSeats((prevSelected) =>
      prevSelected.includes(seatId)
        ? prevSelected.filter((id) => id !== seatId)
        : [...prevSelected, seatId]
    );
  }, []);

  // const updateSectionSeats = useCallback(
  //   (sectionIndex: number, change: number) => {
  //     setSections((prevSections) => {
  //       const newSections = [...prevSections];
  //       newSections[sectionIndex] = {
  //         ...newSections[sectionIndex],
  //         seatsPerRow: Math.max(
  //           1,
  //           newSections[sectionIndex].seatsPerRow + change
  //         ),
  //       };
  //       return newSections;
  //     });
  //   },
  //   []
  // );

  const renderSeats = useCallback(
    (sectionName: string) => {
      const sectionSeats = seats.filter((seat) =>
        seat.id.startsWith(sectionName)
      );
      const rows = sections.find((s) => s.name === sectionName)?.rows || [];

      return rows.map((row) => (
        <div key={`${sectionName}-${row}`} className='flex justify-center mb-2'>
          <div className='mr-2 w-6 text-right'>{row}</div>
          {sectionSeats
            .filter((seat) => seat.row === row)
            .map((seat) => (
              <SeatButton key={seat.id} seat={seat} onClick={handleSeatClick} />
            ))}
        </div>
      ));
    },
    [seats, sections, handleSeatClick]
  );

  return (
    <div className='container mx-auto p-4 max-w-4xl '>
      <h1 className='text-3xl font-bold mb-6 text-center'>Cinema Seating</h1>
      <div className='mb-8 flex justify-center'>
        <CinemaScreen />
      </div>
      <div className='flex flex-col gap-4'>
        {sections.map((section) => (
          <div
            key={section.name}
            className='bg-neutral-700 p-4 rounded-md shadow-md'
          >
            {renderSeats(section.name)}
          </div>
        ))}
      </div>
      <div className='mt-8'>
        <h2 className='text-xl font-semibold mb-4'>Selected Seats</h2>
        {selectedSeats.length > 0 ? (
          <div className='text-wrap'>
            {selectedSeats.map((seatId, index) => (
              <span key={seatId}>
                {seatId}
                {index < selectedSeats.length - 1 && ', '}
              </span>
            ))}
          </div>
        ) : (
          <p>No seats selected</p>
        )}
      </div>
      <Legend />
    </div>
  );
}
