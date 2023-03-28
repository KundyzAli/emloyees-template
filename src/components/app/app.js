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
        { name: 'John S.', salary: 800, increase: false, rise: true, id: 1 },
        { name: 'Alex M.', salary: 3800, increase: true, rise: false, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 },
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
      rise: false,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => { //item - это каждый отдельный объект внутрим массива
        if (item.id === id) { //если id внутри объекта совпали с тем id кот-й пришел внутри метода
          return { ...item, [prop]: !item[prop] } //возвращаем нов.массив, в кот-м все старые св-ва
          //  и плюс increase в кот-м поменялось значение на противоположное(нов.массив в кот-м старые св-ва и плюс новые измененные значения)
        }
        return item; //если условия не выполнились возвращаем объект
      })
    }))
  }


  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    return (
      <div className="app" >
        <AppInfo
          employees={employees}
          increased={increased} />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
          <EmployeesList
            data={this.state.data}
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp} />
          <EmployeesAddForm
            onAdd={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;