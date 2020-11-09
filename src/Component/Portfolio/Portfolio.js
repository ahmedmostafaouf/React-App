 // use hoocks ----> use state in Function Componant 
import React ,{useState , useEffect} from 'react';
import axios from 'axios'
import {PortfolioSecssion,PortfolioTitle,Span,PortfoList,PortfoItems,WrabbarImage,Image,Overlay,SpanOverlay} from './style.js'
const Portfolio = () => {
  // state in hocks
  const [images,setImages]=useState([])
  // componentDidMount in hocks
    useEffect( ()=> {
      axios.get('js/data.json').then(res=>setImages(res.data.portfolio))
    },[] )
    const TheImages =images.map((imageItem) => {
      return (
        <WrabbarImage key={imageItem.id}>
        <Image src={imageItem.image} alt="" />
        <Overlay >
            <SpanOverlay>
                Show Image
            </SpanOverlay>
        </Overlay>
    </WrabbarImage>
      )
    })

  return (
    <PortfolioSecssion>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfoList>
                <PortfoItems active >All</PortfoItems>
                <PortfoItems>HTML</PortfoItems>
                <PortfoItems>Photoshop</PortfoItems>
                <PortfoItems>Wordpress</PortfoItems>
                <PortfoItems>Mobile</PortfoItems>
            </PortfoList>
            
            <div className="box">
                
               {TheImages}
                
                
                  
                
            </div>
            
        </PortfolioSecssion>
  );
}

export default Portfolio;
