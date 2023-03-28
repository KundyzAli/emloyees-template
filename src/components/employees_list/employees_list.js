import EmployeesListItem from '../employees_list_item/employees_list_item';
import './employees_list.css';

const EmployeesList = ({ data, onDelete }) => {

  const elements = data.map(item => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => console.log('Deleted')} />
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployeesList;