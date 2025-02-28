import { useEffect, useState } from 'react'
import './App.css'
import ProductCard from './ProductCard.jsx';
import LoadMoreButton from './LoadMoreButton.jsx';

function App() {
  const [content, setContent] = useState([])
  const [current, setcurrent] = useState(0)
  const [error, seterror] = useState(null)
  const [loading, setloading] = useState(false)
  const [full, setfull] = useState(false)


  async function call() {
    try {
      setloading(true);
      let data = await fetch(`https://dummyjson.com/products?limit=20&skip=${current * 20}`);

      let result = await data.json();

      if (result && result.products && result.products.length) {
        setContent((prev) => [...prev,...result.products]);
      }
      setloading(false);
    }
    catch (e) {
      setloading(false);
      seterror(e);
    }
  }
  useEffect(() => {
    call();
  }, [current])


  useEffect(()=>{
    if(current * 20 === 40) setfull(true);
  },[current])

  if (error !== null) {
    return <div>{error}</div>
  }

  if (loading) {
    return <div>loading data</div>
  }

  function handleOnClick(){
    setcurrent(current + 1);
  }

  return (
    <div className="container">
      {content.length > 0 ? (
        content.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found</p>
      )}
      <LoadMoreButton onClick={()=> handleOnClick()} disabled={full}/>
    </div>
  )
}

export default App
