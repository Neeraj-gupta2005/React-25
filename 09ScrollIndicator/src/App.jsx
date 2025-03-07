import { useEffect, useState } from 'react'
import './style.css'

function App() {
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  const [perc, setPerc] = useState(0);
  const [loading, setloading] = useState(false);


  async function fetchData() {
    try {
      setloading(true);
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const APIdata = await response.json();

      if (APIdata && APIdata.products && APIdata.products.length > 0) {
        setData(APIdata.products);
        setloading(false);
      }
    } catch (error) {
      setError(error.message);
      console.log(error.message);
      setloading(false);
    }

  }

  function handleScroll() {
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let howMuchScroll = (document.documentElement.scrollTop / height) * 100;
    setPerc(howMuchScroll);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  useEffect(() => {
    fetchData();
  }, [])

  if (error) {
    return <div>Error ! {error}</div>;
  }

  if (loading) {
    return <div>Loading data ! Pleaae wait</div>;
  }


  return (
    <>
      <div >
        <h1>Scroll Indicator</h1>
        <div className="top-container">
          <h1>Custom Scroll Indicator</h1>
          <div className="scroll-progress-tracking-container">
            <div
              className="current-progress-bar"
              style={{ width: `${perc}%` }}
            ></div>
          </div>
        </div>
        <div className='container'>
          {
            data && data.length ?
              data.map((product) => (
                <p key={product.id}>{product.title}</p>
              ))
              : null
          }
        </div>
      </div>
    </>
  )
}

export default App
