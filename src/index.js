import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './components/SearchForm.jsx';
import Weather from './components/Weather.jsx';

import './index.css';
import 'antd/dist/antd.css';

const data = {
  waterloo: {
    temp: 15,
    hum: 100,
    ws: 100,
    desc: 'Nice day'
  },
  kitchener: {
    temp: 20,
    hum: 75,
    ws: 50,
    desc: 'Okay day'
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: true,
      city: '',
      results: null
    };

    this.onSearch = this.onSearch.bind(this);
    this.onBack = this.onBack.bind(this);
  }

  onSearch(city) {
    alert(city);
    if (data.hasOwnProperty(city)) {
      this.setState({
        results: data[city],
        showForm: false,
        city
      })
    } else {
      this.setState({
        results: {},
        showForm: false,
        city: ''
      });
    }
  }

  onBack() {
    // TODO
    console.log('onBack')
  }

  render() {
    const {
      showForm,
      results,
      city
    } = this.state;

    return (
      <div className="container">
        {showForm ? (
          <SearchForm onSearch={this.onSearch} />
        ) : (
          <Weather
            results={results}
            city={city}
            onBack={this.onBack}
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById(('root')));
