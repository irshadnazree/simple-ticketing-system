export default function Legend() {
  return (
    <div className="mt-4 flex justify-center space-x-4">
      <div className="flex items-center">
        <div className="mr-2 h-6 w-6 rounded-sm bg-gray-200"></div>
        <span>Available</span>
      </div>
      <div className="flex items-center">
        <div className="mr-2 h-6 w-6 rounded-sm bg-blue-500"></div>
        <span>Selected</span>
      </div>
      <div className="flex items-center">
        <div className="mr-2 h-6 w-6 rounded-sm bg-gray-500"></div>
        <span>Occupied</span>
      </div>
    </div>
  );
}
