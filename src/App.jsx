import React from 'react';
import EmployeeTable from './EmployeeTable';
import Datetime from 'react-datetime';


const App = () => {
  return (
    <div className="App w-full">
      <div className='flex'>
        <div className='m-4 flex'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMXkahg7sYA2eDSUrR8odWza9v8I299zbuzan3xtHHY_oUMZpFoE2HIKUxnP_N-qbZW0&usqp=CAU" className='m-auto lg:w-20 lg:h-20 md:w-10 md:h-10 w-10 h-10' />
          <h1 className="lg:text-2xl font-bold lg:p-4 py-6 px-4 text-base">Employee Activity Dashboard</h1>
        </div>
        <div>
        <h1 className='text-sm font-semibold p-4 m-2 mr-4 absolute right-0 invisible lg:visible'>March 30, 2024</h1>
        <h1 className='text-sm font-semibold p-4 pt-10 m-2 mr-4 absolute right-0 invisible lg:visible'>9:36 AM</h1>
        </div>
      </div>
      <EmployeeTable />
    </div>
  );
};

export default App;
