import React from 'react';

import { Input } from 'antd';
const Search = Input.Search;

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(value) {
    this.props.onSearch(value);
  }

  render() {
    return (
      <div className="black-bg">
        <Search
          placeholder="City"
          onSearch={this.onSearch}
          enterButton={true}
        />
      </div>
    )
  }
}

export default SearchForm;
