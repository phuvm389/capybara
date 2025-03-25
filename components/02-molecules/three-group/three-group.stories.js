import threeGroupTwig from './three-group.twig';
import threeGroupItemsTwig from './three-group-items.twig';
import threeGroupItemTwig from './three-group-item.twig';
import threeGroupData from './three-group.json';
import { sectionSpace } from '../../01-atoms/atoms-arg-types';
import './three-group.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Three Group' };

const argTypes = {
  sectionSpace,
};

// Decorate items to makrup.
let itemsData = [];
threeGroupData.items.forEach((item) => {
  itemsData = [
    ...itemsData,
    {
      content: () => threeGroupItemTwig({ ...item }),
    },
  ];
});

// Decorate default data.
const defaultData = {
  ...threeGroupData,
  items: threeGroupItemsTwig({
    items: itemsData,
  }),
};

// Show controls.
export const threeGroupDoc = {
  render: (args) => threeGroupTwig(args),
  args: { ...defaultData },
  argTypes,
};

export const threeGroup = () => threeGroupTwig({ ...defaultData });
