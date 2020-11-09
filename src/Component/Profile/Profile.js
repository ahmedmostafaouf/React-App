import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ProfileSkills, ProfileSecssion, ProfileList, ProfileItem, Span, Skills, SkillsDesc, SkillsBar, SkillsTitle, SkillsPerc, SkillParent, SkillsSpan, Header, HeaderSpan } from './style.js'
const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios.get('js/data.json').then(res => setProfiles(res.data.profile))
    axios.get('js/data.json').then(res => setSkills(res.data.skills))
  }, [])
  const TheProfile = profiles.map((profileItem) => {
    return (
      <ProfileList key={profileItem.id}>

        <ProfileItem>
          <Span>{profileItem.title}</Span>
          {profileItem.body}
        </ProfileItem>
      </ProfileList>

    )
  })
  const TheSkills = skills.map((skill => {
    return (
      <SkillsBar key={skill.id}>
        <SkillsTitle>{skill.title}</SkillsTitle>
        <SkillsPerc>{skill.prec}</SkillsPerc>
        <SkillParent >
          <SkillsSpan sp={skill.sp}></SkillsSpan>
        </SkillParent>
      </SkillsBar>
    )
  }))
  return (
    <ProfileSkills>
      <div className="container">
        <ProfileSecssion>
          <Header><HeaderSpan>My </HeaderSpan>Profile</Header>

          {TheProfile}
        </ProfileSecssion>

        <Skills>
          <Header >Some <HeaderSpan>skills</HeaderSpan></Header>
          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>
          {TheSkills}
        </Skills>

      </div>
    </ProfileSkills>
  );
}

export default Profile;
