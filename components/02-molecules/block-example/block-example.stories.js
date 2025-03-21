import blockExampleTwig from './block-example.twig';
import blockExampleItemsTwig from './block-example-items.twig';
import blockExampleItemTwig from './block-example-item.twig';
import pictureTwig from '../../01-atoms/picture/picture.twig';
import blockExampleData from './block-example.json';
import './block-example.scss';
import './block-example';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Block Example' };

const argTypes = {
  variants: {
    options: ['block-example--variant-1', 'block-example--variant-2'],
    control: { type: 'select' },
  },
};

// Decorate items to makrup.
let itemsData = [];
blockExampleData.items.forEach((item) => {
  let image = '';
  if (item.image) {
    image = pictureTwig(item.image);
  }
  itemsData = [
    ...itemsData,
    {
      content: () => blockExampleItemTwig({ ...item, image }),
    },
  ];
});

// Decorate default data.
const defaultData = {
  image: pictureTwig(blockExampleData.image),
  items: blockExampleItemsTwig({
    items: itemsData,
  }),
};

// Show controls.
export const blockExample = {
  render: (args) => blockExampleTwig(args),
  args: { ...defaultData },
  argTypes,
};

// Don't show controls.
export const blockExample2 = () =>
  blockExampleTwig({ ...defaultData, variants: 'block-example--variant-1' });
