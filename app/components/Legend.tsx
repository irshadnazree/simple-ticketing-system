export default function Legend() {
  return (
    <div className='mt-4 flex justify-center space-x-4'>
      <div className='flex items-center'>
        <div className='w-6 h-6 bg-gray-200 rounded-sm mr-2'></div>
        <span>Available</span>
      </div>
      <div className='flex items-center'>
        <div className='w-6 h-6 bg-blue-500 rounded-sm mr-2'></div>
        <span>Selected</span>
      </div>
      <div className='flex items-center'>
        <div className='w-6 h-6 bg-gray-500 rounded-sm mr-2'></div>
        <span>Occupied</span>
      </div>
    </div>
  );
}
