import React from 'react';
import { GridStyles, GridItemStyles } from './GridStyles';

export default function Grid() {

  const proficiencies = [
    {
      skill: 'HTML/CSS',
      description: 'Build markup with semantic HTML, write in Sass for quick and efficient styling of client side rendered HTML.'
    },
    {
      skill: 'React',
      description: 'Work with React (Apollo, Graph QL, NextJS/Gatsby/Create React App).'
    },
    {
      skill: 'Javascript',
      description: 'Async programming, DOM manipulations, state management, JSX/Typescript.'
    },
    {
      skill: 'API & Data Handling',
      description: 'Get and post secure api calls and displaying data properly to the frontend.'
    },
    {
      skill: 'Object Oriented Design',
      description: 'Design and develop code that is productive, cost effective and easy to maintain.'
    },
    {
      skill: 'Automated Testing',
      description: 'Jest, Enzyme, React Testing Library.'
    },
    {
      skill: 'Ecommerce',
      description: 'Backend architecture with product listing, custom flow of cart system, confirmation and checkout stages.'
    },
    {
      skill: 'Accessibility',
      description: 'Build components that meet WCAG guidelines, testing with Axe Testing Tool.'
    },
    {
      skill: 'Headless CMS',
      description: 'Provide content-only data source while ensuring authoring capabilities is not compensated.'
    },
  ];

  return <GridStyles>
    {proficiencies && proficiencies.map(skill => {
      return (
        <GridItemStyles>
          {skill.skill && <strong>{skill.skill}</strong>}
          {skill.description && <p>{skill.description}</p>}
        </GridItemStyles>
      )
    })}
  </GridStyles>;
}
