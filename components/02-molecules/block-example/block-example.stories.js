import blockExampleTwig from './block-example.twig';
import blockExampleItemsTwig from './block-example-items.twig';
import blockExampleItemTwig from './block-example-item.twig';
import pictureTwig from '../../01-atoms/picture/picture.twig';
import blockExampleData from './block-example.json';
import './block-example.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Block Example' };
// Decorate items to makrup.
let blockExampleItemsData = [];
blockExampleData.blockExample.items.forEach((item) => {
  const { blockExampleItem } = item;
  if (blockExampleItem.image) {
    blockExampleItem.image = pictureTwig(blockExampleItem.image);
  }
  blockExampleItemsData = [
    ...blockExampleItemsData,
    {
      content: () => blockExampleItemTwig({ blockExampleItem }),
    },
  ];
});
// Decorate default data.
const defaultData = {
  image: pictureTwig(blockExampleData.blockExample.image),
  items: blockExampleItemsTwig({
    items: blockExampleItemsData,
  }),
};

export const blockExample = () =>
  blockExampleTwig({ blockExample: defaultData });
