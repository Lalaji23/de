import  './start-collection.css'
import product_card from '../../../data/product'
import { Link } from 'react-router-dom';



const MainContent=()=>{
  console.log(product_card);
  const listItems = product_card.map((item) =>
  <div className='card' key={item.id}>
   <div className='card_img'>
   <Link to='/Start-collection/memories/memories ' > <img src={item.thumb} /></Link>
    </div><div className='card_header'><h2> {item.product_name}</h2>
    <h2>{item.brandname}</h2>
    <h2>{item.seller}</h2></div>
  </div>);
  return(
    <div className='main_content'>
      {listItems}</div>
  )
}
export default MainContent
