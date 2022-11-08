import React from "react";

// const App = () => {
//     return (
//         <h1>Welcome to UIUC Data Visualizaiton</h1>
//     );
//   };

// export default App;

class App extends React.Component {
  state = {
    counters: [{ name: "item1", value: 0 }, { name: "item2", value: 5 }]
  };

  increment = e => {
    const {
      target: {
        dataset: { i }
      }
    } = e;
    const { counters } = this.state;
    const newCounters = Object.assign(counters, {
      ...counters,
      [i]: { ...counters[i], value: counters[i].value + 1 }
    });
    this.setState({ counters: newCounters });
  };

  render() {
    return this.state.counters.map((counter, i) => {
      return (
        <div>
          {counter.name}, {counter.value}
          {/* We are using function reference here */}
          <button data-i={i} onClick={this.increment}>
            +
          </button>
        </div>
      );
    });
  }
}

export default App;