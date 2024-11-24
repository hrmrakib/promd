import { currentStats } from "../../constants";

const CurrentStats = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8'>
      {currentStats.map((stat) => (
        <div
          key={stat.id}
          className='bg-white dark:bg-gray-800 flex justify-between rounded-xl shadow p-5'
        >
          <div>
            <h2 className='text-lg text-gray-600 dark:text-gray-200  mb-2'>
              {stat.title}
            </h2>
            <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>
              {stat.number}
            </h3>
          </div>

          <img className='w-10 h-10' src={stat.img} alt='check-in' />
        </div>
      ))}
    </div>
  );
};

export default CurrentStats;
