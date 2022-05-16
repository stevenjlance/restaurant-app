import React from "react";
import "./css/App.css";
import SideBar from "./SideBar";
import CardContainer from "./CardContainer";
import Card from "./Card";
import Histogram from "./Histogram";

class App extends React.Component {
  state = {
    filteredRestaurants: [],
    data: [],
    borough: "Bronx",
    search: "",
    histogramData: [],
  };
  // $limit = ___ can be added here to return the desired amount of record
  componentDidMount() {
    // Get the data
    fetch(
      `https://data.cityofnewyork.us/resource/43nn-pn8j.json?$$app_token=9xAS5IfoWb6vioQUBTrz3cRhi&boro=${this.state.borough}&$limit=40`
    )
      // Convert the data
      .then((data) => data.json())
      // what if the data returns?
      .then((data) => {
        // Store data to state
        this.setState({ data: data });
        console.log(this.state.data);

        // Make the histogram data
        const histogramData = [];
        data.map((item) => {
          const histoItem = {};
          if (item.score) {
            histoItem.x = parseFloat(item.score);
            console.log(histoItem);
            histogramData.push(histoItem);
          }
        });
        this.setState({ histogramData });
      })
      // what if there is an error?
      .catch((e) => {
        console.log(e);
      });
  }
  // Get the borough from the checkbox
  updateBorough = (borough) => {
    console.log("getting borough");
    this.setState({ borough: borough });
  };

  // Get the value that they are searching for
  updateSearch = (query) => {
    this.setState({ search: query });
  };

  // search for the value when the button is clicked
  search = (event) => {
    // Get the search value
    const search = this.state.search.toLowerCase();
    // Search the data for the value
    let found = this.state.data.find(
      (item) => item.dba.toLowerCase() === search
    );

    console.log(found);
    // If it is undefined, don't update the screen
    if (!found) return;
    // Return a response based on what is found if the item exists.
  };

  filterList = (searchValue) => {
    const filteredRestaurants = [];
    const filteredResults = this.state.data.filter((restaurant) => {
      return restaurant.dba.toLowerCase().includes(searchValue.toLowerCase());
    });
    // Print values to the screen
    let listItem = filteredResults.forEach((item) => {
      filteredRestaurants.push(item.dba);
    });

    this.setState({ filteredRestaurants });
  };

  manipulateHistoData = () => {};

  render() {
    return (
      <div className="App">
        <header className="App-header">CAN I EAT THERE?</header>
        <div className="grid">
          <SideBar
            updateBorough={this.updateBorough}
            updateSearch={this.updateSearch}
            search={this.search}
            data={this.state.data}
            filterList={this.filterList}
            restaurants={this.state.filteredRestaurants}
          />
          <CardContainer data={this.state.data} />
        </div>
        <Histogram data={this.state.histogramData} />
      </div>
    );
  }
}

export default App;
