import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async() => {
      const url = 'https://testnets-api.opensea.io/assets?asset_contract_address=0x104ADFE3E1952d382575D7Af8CE2467256188921&order_direction=asc';
      const options = {method: 'GET'};

      fetch(url, options)
      .then(response => response.json())
      .then(openseaData => {console.log(openseaData.assets); setPunkListData(openseaData.assets);})
      .catch(err => console.error(err));
    
      /*const openseaData = await axios.get(url);
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);*/
    }

    return getMyNfts();
  }, [])

  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main selectedPunk={selectedPunk} punkListData={punkListData} />
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
      )}
    </div>
  );
}

export default App;
