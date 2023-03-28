import AppInfo from '../app_info/app_info';
import SearchPanel from '../search_panel/search_panel';
import AppFilter from '../app_filter/app_filter';
import EmployeesList from '../employees_list/employees_list';
import EmployeesAddForm from '../employees_add_form/employees_add_form';


import './app.css';


function App() {

  const data = [
    { name: 'John S.', salary: 800, increase: false, id: 1 },
    { name: 'Alex M.', salary: 3800, increase: true, id: 2 },
    { name: 'Carl W.', salary: 5000, increase: false, id: 3 },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
        <EmployeesList
          data={data}
          onDelete={id => console.log(id)} />
        <EmployeesAddForm />
      </div>
    </div>
  );
}

export default App;