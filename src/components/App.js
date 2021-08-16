import React from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

const APIKey = "2c05a0306a2568967046aa8d9eb7438a";

class App extends React.Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    humidity: "",
    wind: "",
    sky: "",
    skyicon: "",
    err: false,
  };
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  // ONLINE SEARCH APLICATION
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.value.length < 5) return;
  //   if (prevState.value !== this.state.value) {
  //     const API = `api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}`;

  //     fetch(API)
  //       .then((response) => {
  //         if (response.ok) {
  //           return response;
  //         }
  //         throw Error("Coudn't found this city");
  //       })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const actualdate = new Date().toLocaleString();
  //         this.setState((prevState) => ({
  //           date: actualdate,
  //           city: prevState.value,
  //           sunrise: data.sys.sunrise,
  //           sunset: data.sys.sunset,
  //           temp: data.main.temp,
  //           humidity: data.main.humadity,
  //           wind: data.wind.speed,
  //           err: false,
  //         }));
  //       })
  //       .catch((err) => {
  //         this.setState((prevState) => ({
  //           err: true,
  //           city: prevState.value,
  //         }));
  //       });
  //   }
  // }
  // FORM SEARCH
  handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&units=metric&appid=${APIKey}`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Coudn't found this city");
      })
      .then((response) => response.json())
      .then((data) => {
        const actualdate = new Date().toLocaleString();
        this.setState((prevState) => ({
          date: actualdate,
          city: prevState.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          sky: data.weather[0].description,
          skyicon: data.weather[0].icon,
          err: false,
        }));
      })
      .catch((err) => {
        console.log(err);
        this.setState((prevState) => ({
          err: true,
          city: prevState.value,
        }));
      });
  };

  render() {
    return (
      <div className="wheather-app">
        <h1 className="wheather-app__title">Wheather App</h1>
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
