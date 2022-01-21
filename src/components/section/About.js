import React from 'react';
import { SectionStyles } from './SectionStyles';

export default function About() {
  return <SectionStyles>
    <p>I'd consider myself an adventurer. The journey can take me to cycling up the highest gradient hills in town or spending an all nighter learning a new tech.
    </p>
    <p>
      Having studied Web Development, coupled with years in the graphics industry and UI/UX design, I am armed with an understanding of both front and back end development. This allows me to apply my expertise with a keen eye in design, problem solving and critical thinking when developing a project.
    </p>
    <p>
      I have been working as a frontend developer in the real estate industry and the loyalty reward platform space. Solid automated testing has been a key principle for me.</p>

      <div className="contact-info">
        <div classsName="column-1">
          <ul>
          <li><strong>Residence: </strong> Alliston, ON Canada</li>
          <li><strong>Email: </strong> <a href="mailto:jnsn.ta@gmail.com">jnsn.ta@gmail.com</a></li>
          <li><strong>Github: </strong> <a href="https://github.com/johnsonta87" target="_blank" rel="noreferrer">profile</a></li>
          </ul>
      </div>

      <div classsName="column-1">
        <ul>
          <li><strong>Phone: </strong> +1 416 453 2077</li>
          <li><strong>Linkedin: </strong> <a href="https://www.linkedin.com/in/johnsonta1" target="_blank" rel="noreferrer">profile</a></li>
        </ul>
      </div>
      </div>
  </SectionStyles>;
}