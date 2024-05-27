import React, { useEffect, useState } from 'react';
import employeesData from './employees.json';

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";


const originalEmp = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employeeOfTheMonth, setEmployeeOfTheMonth] = useState(null);

  useEffect(() => {
    // Sort employees by hours worked in descending order
    const sortedEmployees = [...employeesData].sort((a, b) => b.hoursWorked - a.hoursWorked);
    setEmployees(sortedEmployees);
    setEmployeeOfTheMonth(sortedEmployees[0]); // Set the first employee as the employee of the month
  }, []);
  

  useEffect(() => {
    setEmployees(employeesData);
  }, []);

  const getMedal = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return "";
  };

  

  return (
    <div className="p-4 flex gap-2">
      <table className="lg:w-[75%] divide-y divide-gray-200">
        <thead className="bg-blue-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider"></th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider">Rank</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider">Designation</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider">No. of hours worked</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white tracking-wider">Changes</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {employees.sort((a, b) => b.hoursWorked - a.hoursWorked).map((employee, index) => (
            <tr
              key={employee.id}
              onClick={() => setSelectedEmployee(employee)}
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <td className="px-6 py-4 whitespace-nowrap">{getMedal(index + 1)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap"><div className='inline-flex gap-1'><img src={employee.img} className='rounded-full w-5 h-5 object-cover m-1' /> {employee.name}</div></td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.designation}</td>
              <td className="px-6 py-4 whitespace-nowrap">7({employee.hoursWorked})</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className='inline-flex items-center gap-1'>
                    {employee.changesign == 1 ? <IoMdArrowDropup color='green' /> : <IoMdArrowDropdown color='red'/>} {employee.change} hrs
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedEmployee && (
        <div className="lg:w-[25%] p-2 border lg:h-[300px] border-gray-200 bg-gray-50 items-center flex flex-col rounded-2xl">
          <img src={selectedEmployee.img} className="w-32 h-32 object-cover mb-4" />
          {selectedEmployee.id === employeeOfTheMonth.id && <h3 className="text-lg font-bold text-blue-800">Employee of the Month</h3>}
          <h2 className="text-lg font-bold">{selectedEmployee.name}</h2>
          <p className='text-sm'>{selectedEmployee.designation}</p>

        </div>
      )}
    </div>
  );
};

export default originalEmp;
