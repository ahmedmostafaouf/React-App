import React ,{useState,useEffect} from 'react';
import axios from 'axios'
import {SocialInfo,Social,Icon,Paragraph,Span,InfoSpan} from './style.js'
const SocialMedia = () => {
  const [Socials,setSocial]=useState([]);
  useEffect(()=>{
      axios.get("js/data.json").then(res=>setSocial(res.data.social))
  },[])
  const TheSocial = Socials.map((socialItem) => {
    return(
      <Social item={socialItem.id} key={socialItem.id}>
        <Icon className={socialItem.icon}></Icon>
        <Paragraph>
            <Span>{socialItem.title}</Span>
            <InfoSpan>{socialItem.body}</InfoSpan>
        </Paragraph>
    </Social>
    )
  })
  return (
    <SocialInfo>
            
    {TheSocial}
</SocialInfo>
  );
}

export default SocialMedia;
