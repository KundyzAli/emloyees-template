import EmployeesListItem from '../employees_list_item/employees_list_item';
import './employees_list.css';

const EmployeesList = ({ data, onDelete }) => {
  // 2-й аргумент передан с app.js, там вызван
  const elements = data.map(item => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)} /> /* мы вызываем удаление id ,в это части мы получаем id того сотрудника кот-го мы удаляем, чтобы дальше работать с id */
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployeesList;