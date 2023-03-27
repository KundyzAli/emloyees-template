import EmployeesListItem from '../employees_list_item/employees_list_item';
import './employees_list.css';

const EmployeesList = () => {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem />
      <EmployeesListItem />
      <EmployeesListItem />
    </ul>
  )
}

export default EmployeesList;