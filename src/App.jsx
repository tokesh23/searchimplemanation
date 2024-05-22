import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./assets/components/Card";
import Search from "./assets/components/Search";
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data); // Optional: to see the output
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredImages = images.filter((image) =>
    image.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div><Search onSearch={handleSearch} /></div>
      <div className="App1">
        {filteredImages.map((c) => (
          <Card key={c.id} images={c.image} price={c.price} title={c.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
