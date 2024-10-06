import { Square } from 'lucide-react';
import { Seat } from '../utils/seatUtils';

interface SeatButtonProps {
  seat: Seat;
  onClick: (seatId: string) => void;
}

export default function SeatButton({ seat, onClick }: SeatButtonProps) {
  return (
    <button
      onClick={() => onClick(seat.id)}
      disabled={seat.isOccupied}
      className={`w-6 h-6 m-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        seat.isOccupied
          ? 'bg-gray-500 cursor-not-allowed'
          : seat.isSelected
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 hover:bg-gray-300'
      }`}
      aria-label={`${seat.row}${seat.number} ${
        seat.isOccupied
          ? 'Occupied'
          : seat.isSelected
          ? 'Selected'
          : 'Available'
      }`}
    >
      <Square className='w-full h-full p-1' />
    </button>
  );
}
