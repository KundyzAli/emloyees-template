import EmployeesListItem from '../employees_list_item/employees_list_item';
import './employees_list.css';

const EmployeesList = ({ data }) => {

  const elements = data.map(item => {
    return (
      // 2 нижних кода индентичны,1-й написан при помощи spread оператора
      <EmployeesListItem {...item} />
      // 2-й при помощи деструктуризации
      // <EmployeesListItem name={item.name} salary={item.salary} />
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployeesList;