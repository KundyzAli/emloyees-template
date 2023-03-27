import AppInfo from '../app_info/app_info';
import SearchPanel from '../search_panel/search_panel';
import AppFilter from '../app_filter/app_filter';
import EmployeesList from '../employees_list/employees_list';
import EmployeesAddForm from '../employees_add_form/employees_add_form';


import './app.css';


function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
        <EmployeesList />
        <EmployeesAddForm />
      </div>
    </div>
  );
}

export default App;