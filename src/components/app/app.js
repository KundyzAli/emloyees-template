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
      ],
      term: '',
      filter: 'all'
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

  searchEmp = (items, term) => {
    //1-арг-т строка по кот-й будем искать, 2-массив данных кот-й будем фмльтровать
    if (term.length === 0) { //если строка кот-я отображает поиск-пустая то ничего не делаем, отображаем тот массив кот-й придет
      return items;
    }
    //если условия не соблюдены, т.е. строка не пустая
    return items.filter(item => { //фильтруем каждый объект в массиве
      return item.name.indexOf(term) > -1
      //ищем в каждом item "name", пытаемся найти кусок строки который приходит в term,
      //  если ничего не найдено, мы возвращаем -1, если найдено совпадение то возвращается индекс, где была найдена подстрока
    })
  }

  //метод будет отвечать за установление состояния внутри главного компонента Apр
  onUpdateSearch = (term) => {
    this.setState({ term });
  }

  //фильтруем список имен по значениям
  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise); //item.rise аналогична записи if (item.rise) return
      //если rise стоит в сост. true то она вкоючается в фильтр
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items
    }
  }

  //изменяем в нашем состоянии текущий фильтр
  onFilterSelect = (filter) => {
    this.setState({ filter });
  }

  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter); //1-й арг-т это массив,т.е. сначала фильтрация идет по поиску, а потом фильтрация по фильтрам

    return (
      <div className="app" >
        <AppInfo
          employees={employees}
          increased={increased} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
          <EmployeesList
            data={visibleData}
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