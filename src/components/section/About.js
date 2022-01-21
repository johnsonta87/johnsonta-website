import React from 'react';
import { SectionStyles } from './SectionStyles';

export default function About() {
  return <SectionStyles>
    <p>I'm an adventurer with an ongoing curious mind. The journey can take me to cycling up the highest gradient hills in town or spending an all nighter learning a new tech.
    </p>
    <p>
      With my studies in web development, coupled with years in the graphics and UI design industry, I have an understanding of front and backend development. This allows me to apply my expertise with a keen eye in design, problem solving and critical thinking when developing a project.
    </p>
    <p>
      I have been working as a frontend developer in various industries including real estate, nonprofit fundraising, and loyalty rewards industry. Whether the websites entail ecommerce aspects, jamstack website driven by a headless CMS, educational or corporate websites, end to end automated testing, I am always excited and passionate to work with teams to accomplish the project.</p>

      <div className="contact-info">
        <div classsName="column-1">
          <ul>
          <li><strong>Residence: </strong> Alliston, ON Canada</li>
          <li><strong>Email: </strong> <a href="mailto:jnsn.ta@gmail.com">jnsn.ta@gmail.com</a></li>
          <li><strong>Phone: </strong> +1 416 453 2077</li>
          </ul>
      </div>

      <div classsName="column-1">
        <ul>
          <li><strong>Github: </strong> <a href="https://github.com/johnsonta87" target="_blank" rel="noreferrer">profile</a></li>
          <li><strong>Linkedin: </strong> <a href="https://www.linkedin.com/in/johnsonta1" target="_blank" rel="noreferrer">profile</a></li>
        </ul>
      </div>
      </div>
  </SectionStyles>;
}
