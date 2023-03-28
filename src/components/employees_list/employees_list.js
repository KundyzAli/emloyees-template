
import EmployeesListItem from '../employees_list_item/employees_list_item';
import './employees_list.css';

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map(item => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
<<<<<<< HEAD
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} /> /* мы вызываем удаление id ,в это части мы получаем id того сотрудника кот-го мы удаляем, чтобы дальше работать с id */
=======
        onToggleIncrease={() => onToggleIncrease(id)}
        onToggleRise={() => onToggleRise(id)}/> /* мы вызываем удаление id ,в это части мы получаем id того сотрудника кот-го мы удаляем, чтобы дальше работать с id */
>>>>>>> d9d3665f4af1a7e623421ea37158ac9d2c5080dc
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployeesList;
