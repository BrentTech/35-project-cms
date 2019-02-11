import React from 'react';

import Record from './record.js';
import Models from './models.js';
import Records from './records.js';

export default class CMS extends React.Component {
  /**
   *
   * Render function for React components
   * @returns JSX Markup
   * @memberof CMS
   */
  render() {
    return (
      <>
        <header>
          <nav>
            <Models />
          </nav>
        </header>

        <section>
          <Records />
        </section>

        <section>
          <Record />
        </section>
      </>
    );
  }
}
