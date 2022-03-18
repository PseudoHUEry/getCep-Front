import React, { Component } from "react";
import { getCep } from "./services/api";
import List from "./components/List";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      cepConsultados: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(this.state.value);
    this.setState({ ...this.state, value: event.target.value });
  }

  async handleSubmit(event) {
    const method = {
      200: (data) => {
        this.setState({
          cepConsultados: [...this.state.cepConsultados, data.message],
        });
      },
      400: (data) => {
        alert("CEP informado é inválido.");
      },
      404: (data) => {
        alert("CEP não encontrado.");
      },
      500: (data) => {
        alert("Internal error. Tente novamente mais tarte.");
      },
    };
    await getCep(this.state.value)
      .then(({ status, data }) => {
        method[`${status}`](data);
      })
      .catch((e) => {
        alert("Por favor, verificar CEP inserido! \n" + e);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="divContainer">
        <div className="inputsContainer">
          <input
            className="insertCep"
            placeholder="Digite seu CEP aqui!"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <input
            type="submit"
            value="🔍"
            className="buttonSend"
            onClick={this.handleSubmit}
          />
        </div>

        <section>
          <List ceps={this.state.cepConsultados} />
        </section>
      </div>
    );
  }
}
