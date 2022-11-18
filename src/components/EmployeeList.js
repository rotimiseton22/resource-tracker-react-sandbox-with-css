const EmployeeList = ({ employees, onChoice }) => {
  return (
    <ul>
      {employees &&
        employees.map((employee) => (
          <button onClick={() => onChoice(employee)} key={employee.userId}>
            <li>{employee.preferredFullName}</li>
          </button>
        ))}
    </ul>
  );
};

export default EmployeeList;
