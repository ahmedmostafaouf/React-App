import React, { Component } from 'react';
import axios from 'axios'
import { WorkSecsion, WorkTitle, WorkPart, Span, Icon, PartTitle, Line, PartDesc } from './style.js'
class Work extends Component {
  state = {
    works: []
  }
  componentDidMount() {
    axios.get('js/data.json').then(res => {
      this.setState({
        works: res.data.works
      })
    })
  }
  render() {
    const { works } = this.state;
    const TheWorks = works.map((work) => {
      return (
        <WorkPart first={work.id} key={work.id}>
          <Icon className={work.icon_name}></Icon>
          <PartTitle>{work.title}</PartTitle>
          <Line />
          <PartDesc>
            {work.body}
          </PartDesc>
        </WorkPart>
      )
    })
    return (
      <WorkSecsion>
        <div className="container">
          <WorkTitle><Span>My</Span> Work</WorkTitle>
          {TheWorks}

        </div>
      </WorkSecsion>
    )
  }
}


export default Work;
