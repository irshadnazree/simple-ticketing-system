import { Seat } from "../utils/seatUtils";

interface SeatButtonProps {
  seat: Seat;
  onClick: (seatId: string) => void;
}

export default function SeatButton({ seat, onClick }: SeatButtonProps) {
  return (
    <button
      onClick={() => onClick(seat.id)}
      disabled={seat.isOccupied}
      className={`m-1 h-6 w-6 rounded-t-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        seat.isOccupied
          ? "cursor-not-allowed bg-gray-500"
          : seat.isSelected
            ? "bg-blue-500 text-white"
            : "bg-gray-200 hover:bg-gray-300"
      }`}
      aria-label={`${seat.row}${seat.number} ${
        seat.isOccupied
          ? "Occupied"
          : seat.isSelected
            ? "Selected"
            : "Available"
      }`}
    >
      <span className="sr-only">{`${seat.row}${seat.number}`}</span>
    </button>
  );
}
