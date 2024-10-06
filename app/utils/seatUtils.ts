export interface Seat {
  id: string;
  row: string;
  number: number;
  isSelected: boolean;
  isOccupied: boolean;
}

export interface Section {
  name: string;
  rows: string[];
  seatsPerRow: number;
}

export const generateSeats = (sections: Section[]): Seat[] => {
  return sections.flatMap((section) =>
    section.rows.flatMap((row) =>
      Array.from({ length: section.seatsPerRow }, (_, index) => ({
        id: `${section.name}-${row}-${index + 1}`,
        row,
        number: index + 1,
        isSelected: false,
        isOccupied: false,
      })),
    ),
  );
};
