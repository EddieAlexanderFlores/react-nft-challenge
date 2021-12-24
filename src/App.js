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
    //const getMyNfts = async() => {
    //const getMyNfts = () => {
      //const url = 'https://testnets-api.opensea.io/assets?asset_contract_address=0x104ADFE3E1952d382575D7Af8CE2467256188921&order_direction=asc';
      //const url = 'https://testnets-api.opensea.io/assets?asset_contract_address=0x104ADFE3E1952d382575D7Af8CE2467256188921&order_direction=asc&offset=0&limit=20';
      //const url = 'https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x104ADFE3E1952d382575D7Af8CE2467256188921&order_direction=asc&offset=0';

      /*fetch(url).then(response => response.json()).then(openseaData => {
        console.log(openseaData.assets);
        setPunkListData(openseaData.assets);
      })*/
      
      //const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x104ADFE3E1952d382575D7Af8CE2467256188921&order_direction=asc');
      //console.log(openseaData.data.assets);
      //setPunkListData(openseaData.data.assets);
    //}

    const options = {method: 'GET'};

    fetch('https://testnets-api.opensea.io/assets?asset_contract_address=0x104ADFE3E1952d382575D7Af8CE2467256188921&order_direction=asc&offset=0&limit=20', options)
    .then(response => response.json())
    .then(response => {console.log(response); setPunkListData(response.assets);})
    .catch(err => console.error(err));

    //return getMyNfts();
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
