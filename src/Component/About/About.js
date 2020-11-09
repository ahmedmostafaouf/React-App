import React from 'react';
import  {Creative,CreativeInfo,InfoTitle,Span,InfoDir,InfoDisc,Anchor} from'./style.js'
const About = () => {
  return (
    <Creative>
            <div className="container">
                <CreativeInfo>
                    <InfoTitle><Span>This is</Span> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDisc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDisc>
                    <InfoDisc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDisc>
                </CreativeInfo>
            </div>
        </Creative>
  );
}

export default About;
