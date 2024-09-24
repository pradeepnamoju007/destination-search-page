// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'
class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }
  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }
  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <div className="destinations-search-container">
          <h1>Destination Search</h1>
          <div className="search-box-container">
            <input
              type="search"
              placeholder="Search"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <div>
            <ul className="destinations-list-container">
              {searchResults.map(eachUser => (
                <DestinationItem key={eachUser.id} userDetails={eachUser} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
