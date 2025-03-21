import cardGridTwig from './card-grid.twig';
import cardGridItemsTwig from './card-grid-items.twig';
import cardGridItemTwig from './card-grid-item.twig';
import cardGridData from './card-grid.json';
import { sectionSpace } from '../../01-atoms/atoms-arg-types';
import './card-grid.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Card Grid' };

const argTypes = {
  sectionSpace,
};

// Decorate items to makrup.
let itemsData = [];
cardGridData.items.forEach((item) => {
  itemsData = [
    ...itemsData,
    {
      content: () => cardGridItemTwig({ ...item }),
    },
  ];
});

// Decorate default data.
const defaultData = {
  ...cardGridData,
  items: cardGridItemsTwig({
    items: itemsData,
  }),
};

// Show controls.
export const cardGrid = {
  render: (args) => cardGridTwig(args),
  args: { ...defaultData },
  argTypes,
};
