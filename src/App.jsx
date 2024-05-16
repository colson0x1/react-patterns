/* @ Compound Components React Pattern */
/* Compound Components are components, React components, that we build such that
 * they don't really work on their own, so standalone, but instead, only together
 * in conjuction.
 * Outside of React, if we consider the `select` and the `option` elements, again
 * two built-in elements built into HTML. Then those elements arent that useful
 * on their own. If we try using just the select element or just the option
 * element, we wont achieve much. Instead, these elements (select and option)
 * are meant to be used in conjuction.
 * Then, we can use the otion element inside of the select element to define
 * options for a dropdown.
 * i.e
 * <select>
 *  <option>Option 1</option>
 *  <option>Option 2</option>
 *  <option>Option 3 </option>
 * </select
 * Thats how these elements work.
 * And we could call them Compound elements or Compound Components because
 * they really only work together. And it turns out that we can also build
 * such kinds of components on our own in our React apps and in certain
 * situations, we also might wanna do that.
 * Example: Accordion (Accordion & AccordionItem)
 */

import Accordion from './components/Accordion/Accordion';
import AccordionItem from './components/Accordion/AccordionItem';

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>

        <Accordion className='accordion'>
          <AccordionItem
            id='experience'
            className='accordion-item'
            title='We got 20 years of experience'
          >
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>
                We are in the business of planning highly individualized
                vacation trips for more than 20 years.
              </p>
            </article>
          </AccordionItem>

          <AccordionItem
            id='local-guides'
            className='accordion-item'
            title="We're working with local guides"
          >
            <article>
              <p>We are not doing this along from our office.</p>
              <p>
                Instead, we are working with local guides to ensure a safe and
                pleasant vacation.
              </p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
