import { Component } from 'react';
import './employees_add_form.css';


class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    }
  }

  // обработчик событий для инпутов с именем и з/п
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
      //когда св-во составное можно заключать в []
    })
  }


  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length < 2 || !this.state.salary) return;
    // валидация, чтобы не добавлялись пустые поля в список, имя не должно быть короче 2 символов, и з/п должна быть введена
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: '',
      salary: ''
    })
  }

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form
          className="add-form d-flex"
          onSubmit={this.onSubmit}>
          <input type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange} />
          <input type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange} />

          <button type="submit"
            className="btn btn-outline-light">Добавить</button>
        </form>
      </div>
    )
  }
}

export default EmployeesAddForm;