// Write your code here
import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {id, name, imgUrl} = userDetails
  return (
    <li className="list-container">
      <img src={imgUrl} className="image" alt={name} />
      <p className="image-name">{name}</p>
    </li>
  )
}
export default DestinationItem
