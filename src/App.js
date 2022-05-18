import React from "react";
import "./css/App.css";
import SideBar from "./SideBar";
import CardContainer from "./CardContainer";
import Histogram from "./Histogram";
import Table from "./Table";
class App extends React.Component {
  state = {
    filteredRestaurants: [],
    data: [],
    borough: "Bronx",
    search: "",
    bronxHisto: [],
    manhattanHisto: [],
    brooklynHisto: [],
    siHisto: [],
    queensHisto: [],
  };
  // $limit = ___ can be added here to return the desired amount of record
  componentDidMount() {
    // Get the data
    // Tried adding this to end and it wouldn't update with checkmark
    // &boro=${this.state.borough}&$limit=40
    fetch(
      `https://data.cityofnewyork.us/resource/43nn-pn8j.json?$$app_token=9xAS5IfoWb6vioQUBTrz3cRhi`
    )
      // Convert the data
      .then((data) => data.json())
      // what if the data returns?
      .then((data) => {
        // Display only the first 40 data items, but keep the rest of the histogram
        const dataHolder = data.slice(0, 40);
        // Store data to state
        this.setState({ data: dataHolder });

        // Make the histogram data
        const bronxHisto = [];
        const manhattanHisto = [];
        const brooklynHisto = [];
        const siHisto = [];
        const queensHisto = [];
        // Push histogram data
        data.forEach((item) => {
          const histoItem = {};
          if (item.score) {
            histoItem.x = parseFloat(item.score);
            if (item.boro.toLowerCase() === "bronx") {
              bronxHisto.push(histoItem);
            } else if (item.boro.toLowerCase() === "manhattan") {
              manhattanHisto.push(histoItem);
            } else if (item.boro.toLowerCase() === "brooklyn") {
              brooklynHisto.push(histoItem);
            } else if (item.boro.toLowerCase() === "staten island") {
              siHisto.push(histoItem);
            } else if (item.boro.toLowerCase() === "queens") {
              queensHisto.push(histoItem);
            }
          }
        });
        this.setState({ bronxHisto });
        this.setState({ manhattanHisto });
        this.setState({ brooklynHisto });
        this.setState({ siHisto });
        this.setState({ queensHisto });
      })
      // what if there is an error?
      .catch((e) => {
        console.log(e);
      });
  }
  // Get the borough from the checkbox
  updateBorough = (borough) => {
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

    // If it is undefined, don't update the screen
    if (!found) return;
    // Return a response based on what is found if the item exists.
  };

  filterList = (searchValue) => {
    const filteredRestaurants = [];
    const filteredResults = this.state.data.filter((restaurant) => {
      if (!restaurant.dba) return "";
      return restaurant.dba.toLowerCase().includes(searchValue.toLowerCase());
    });
    // Print values to the screen
    filteredResults.forEach((item) => {
      if (!item.dba) return;
      filteredRestaurants.push(item.dba);
    });

    this.setState({ filteredRestaurants });
  };

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
        <h1>Health Score Breakdown by Borough for 2021</h1>
        <Table />
        <div id="histo">
          <Histogram data={this.state.bronxHisto} boro="Bronx" />
          <Histogram data={this.state.manhattanHisto} boro="Manhattan" />
          <Histogram data={this.state.brooklynHisto} boro="Brookyn" />
          <Histogram data={this.state.siHisto} boro="Staten Island" />
          <Histogram data={this.state.queensHisto} boro="Queens" />
        </div>
      </div>
    );
  }
}

export default App;
