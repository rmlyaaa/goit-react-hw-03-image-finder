import { GalleryImage } from 'components/GalleryImage/GalleryImage';
import { Item, List } from './GalleryList.styled';

export const GalleryList = ({ imagesList }) => {
  return (
    <>
      <List>
        {imagesList.map(image => (
          <Item key={image.id}>
            <GalleryImage image={image} />
          </Item>
        ))}
      </List>
    </>
  );
};
