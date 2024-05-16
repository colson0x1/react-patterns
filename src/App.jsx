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

/* @ Render Props Pattern */
/*
 * The core idea behind this Render Props pattern is that, we pass a function
 * as a value for the children prop or actually for any prop but it's most
 * commonly done for the children prop.
 * So the idea is that we have one component that defines some function,
 * which important, must return something renderable. So a function in a
 * component where that function in the component then returns something
 * renderable and it's then this function which is passed as a value for
 * the children prop.
 * So between those component tags to another component i.e component two, and
 * that component then returns the result of calling that received function
 * which is why this function must return something renderable.
 *
 * Example:
 * Reusable SearchableList Component, which should be a component
 * that displays a search input field and contains the logic for searching
 * through the items that are passed to that list.
 * And the idea is that this component can be used on different kinds of data,
 * and very important, that this component is all about containing that search
 * logic, but not really about controlling how the items should be rendered.
 * So we wanna build a component that contains a lot of logic, possibly
 * also some complex logic, but that's not really involved too much with
 * rendering the items that are searchable.
 * And that's a usecase where render props can help us!
 */

import Accordion from './components/Accordion/Accordion';
import SearchableList from './components/SearchableList/SearchableList';

import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';
import Place from './Place';

const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>

        {/* With this Compound Component Pattern, Now we can use className on 
        Title and Content */}
        <Accordion className='accordion'>
          <Accordion.Item id='experience' className='accordion-item'>
            <Accordion.Title className='accordion-item-title'>
              We got 20 years of experience
            </Accordion.Title>
            <Accordion.Content className='accordion-item-content'>
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  We are in the business of planning highly individualized
                  vacation trips for more than 20 years.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item id='local-guides' className='accordion-item'>
            <Accordion.Title className='accordion-item-title'>
              We're working with local guides
            </Accordion.Title>
            <Accordion.Content className='accordion-item-content'>
              <article>
                <p>We are not doing this along from our office.</p>
                <p>
                  Instead, we are working with local guides to ensure a safe and
                  pleasant vacation.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>

        {/* Render Props Pattern:
        We're passing a function as a value for the children prop in this case
        so that the other component, the receiving component can use that
        received function, which is received through props, to render some 
        content.*/}
        <SearchableList items={PLACES}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={['city 1', 'city 2', 'city 3']}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
