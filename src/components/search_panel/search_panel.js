import { Component } from 'react';

import './search_panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onUpdateSearch = (e) => { //onUpdateSearch - работает локально
    const term = e.target.value; //когда срабатывает событие в input, в эту переменную мы получаем value
    this.setState({ term }); // устаналиваем локальное состояние term
    this.props.onUpdateSearch(term); //пробрасываем лок.сост. на вверх при помощи вызова того props кот-й нам пришел сюда
    //а этот onUpdateSearch приходит из другого компонента и выполняет свою роль
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={this.state.term}
        onChange={this.onUpdateSearch} />
    )
  }
}

export default SearchPanel;