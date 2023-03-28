import { Component } from 'react';

import AppInfo from '../app_info/app_info';
import SearchPanel from '../search_panel/search_panel';
import AppFilter from '../app_filter/app_filter';
import EmployeesList from '../employees_list/employees_list';
import EmployeesAddForm from '../employees_add_form/employees_add_form';

import './app.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John S.', salary: 800, increase: false, id: 1 },
        { name: 'Alex M.', salary: 3800, increase: true, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, id: 3 },
      ]
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }

    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

  render() {
    return (
      <div className="app" >
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
          <EmployeesList
            data={this.state.data}
            onDelete={this.deleteItem} />
          <EmployeesAddForm
            onAdd={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;