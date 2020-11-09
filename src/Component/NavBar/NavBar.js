import React from 'react';
import {Link} from 'react-router-dom';
import {NavBarSection,Logo,LogoText,Anchor,List,UlList,Label,Input} from './style.js'
const NavBar = () => {
  return (
    <NavBarSection>
        
        <div className="container">
            <Logo>
                <LogoText>Ultra Profile</LogoText>
            </Logo>
            <Input type="checkbox" id="nav"/>
                <Label for="nav"></Label>
            
            <UlList>
                <List><Link className="selected" to="/">Home</Link></List>
                <List><Anchor href="#">Work</Anchor></List>
                <List><Anchor href="#">Portfolio</Anchor></List>
                <List><Anchor href="#">Resume</Anchor></List>
                <List><Anchor href="#">About</Anchor></List>
                <List><Link className="selected" to="/contact">Contact</Link></List>
            </UlList>
            
        </div>
    </NavBarSection>
  );
}

export default NavBar;
