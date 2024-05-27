import React, { useEffect, useState } from 'react';
import employeesData from './employees.json';

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const EmployeeTable = () => {
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
  // Assign the medals to the top 3 ranks - ranks is obtained from the
  const getMedal = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return "";
  };

  return (
    <div className="p-4 flex flex-col md:flex-row gap-2">
      <div className="overflow-x-auto w-full md:w-3/4 lg:w-[75%]">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-800">
            <tr>
              <th className="lg:px-4 px-2 py-3 text-left text-xs font-medium text-white tracking-wider"></th>
              <th className="lg:px-4 px-2 py-3 text-left text-xs font-medium text-white tracking-wider">Rank</th>
              <th className="lg:px-4 px-2 py-3 text-left text-xs font-medium text-white tracking-wider">Name</th>
              <th className="lg:px-4 px-2 py-3 text-left text-xs font-medium text-white tracking-wider">Designation</th>
              <th className="lg:px-4 px-2 py-3 text-left text-xs font-medium text-white tracking-wider">No. of hours worked</th>
              <th className="lg:px-4 px-2 py-3 text-left text-xs font-medium text-white tracking-wider">Changes</th>
            </tr>
          </thead>

          {/* The code below sorts the employees according to the hours worked to arrange them from maxHours to least  */}
          <tbody className="bg-white divide-y divide-gray-200">
            {employees.sort((a, b) => b.hoursWorked - a.hoursWorked).map((employee, index) => (
              
            //   We can click on any of the employee to get it's details in the sidebar by setSelectedEmployee function 
              <tr
                key={employee.id}
                onClick={() => setSelectedEmployee(employee)}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >

                {/* Retrieving all the employee details from the employee.json file and map on them. */}
                {/* Passing the ranks of the employees for assigning medals  */}
                <td className="px-4 py-3 whitespace-nowrap text-center">{getMedal(index + 1)}</td>
                <td className="px-4 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <img src={employee.img} className="rounded-full w-5 h-5 object-cover m-1" alt={employee.name} />
                    <span>{employee.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">{employee.designation}</td>
                <td className="px-4 py-4 whitespace-nowrap">{employee.hoursWorked}</td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    
                    {/* The code snippet below assigns the Up or Down arrows to the Changes colums with the help of changeSign value in json  */}
                    {employee.changesign === 1 ? <IoMdArrowDropup className="text-green-500" /> : <IoMdArrowDropdown className="text-red-500" />} 
                    <span>{employee.change} hrs</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* The code snippet below displays the details of the selected employee */}
      {selectedEmployee && (
        <div className="w-full lg:h-[300px] md:w-1/4 p-4 border border-gray-200 bg-gray-50 rounded-2xl">
          <img src={selectedEmployee.img} className="lg:w-40 lg:h-40 object-cover mb-4 mx-auto" alt={selectedEmployee.name} />

          {/* This Assigns the Title of Employee of the month to the Employee with Rank 1 */}
          {selectedEmployee.id === employeeOfTheMonth.id && <h3 className="text-lg font-bold text-blue-800 text-center">Employee of the Month</h3>}
          <h2 className="text-lg font-bold text-center">{selectedEmployee.name}</h2>
          <p className="text-sm text-center">{selectedEmployee.designation}</p>
          
        </div>
      )}
    </div>
  );
};

export default EmployeeTable;
