import React from 'react';

import { connect } from 'react-redux';

import LinkInternal from '../../link-internal/link-internal.component';

import './introduction.styles.scss';

const Introduction = ({ homepageSections }) => {
  return (
    <div className=' introduction'>
      <div className='center'>
        <h1>Hey, I'm Moshe</h1>
        <h3>Looking for a junior frontend developer position </h3>
        <p>Didn't know what I wanted to do and felt short on career options due to stuttering, until I realized I can code. Decided to learn web development and did it on my own. Won't frown uppon internship offers. Doctors, lawyers and accountants do it. It's only fair for me in order to gain experience.</p>
      </div>
      <ul className='bottom'>
        {homepageSections.map((section, idx) => (
          <LinkInternal
            key={idx}
            section={section}
            text={section.toUpperCase()}
            inHomepage={true}
          />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Introduction);
