import './app_filter.css';

const AppFilter = (props) => {
  const buttonsData = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'rise', label: 'На повышение' },
    { name: 'moreThen1000', label: 'З/П больше 1000$' }
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    //если props.filter равен name, то возвр. true в active, false если не равен
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    //если active - true то подставляем тег 'btn-light', если false то тег 'btn-outline-light'
    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}>
        {label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
}

export default AppFilter;