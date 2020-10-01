import React from 'react';
import { HomeContentElement, H1 } from '../elements';

export const HomeContent = () => {
  return (
    <HomeContentElement>
      <H1 size="small" home={true}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
        ipsa incidunt a excepturi eum quo minima labore rerum eligendi maiores
        officia, nesciunt repudiandae, aliquid asperiores soluta? Odio error
        debitis eos?
      </H1>
    </HomeContentElement>
  );
};
