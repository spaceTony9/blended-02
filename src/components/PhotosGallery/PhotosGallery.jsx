import { Grid, PhotosGalleryItem } from 'components';

export const PhotosGallery = ({ photos }) => {
  return (
    <Grid>
      {photos.map(({ id, avg_color, alt, src }) => (
        <PhotosGalleryItem key={id} avg_color={avg_color} alt={alt} src={src} />
      ))}
    </Grid>
  );
};

// - `id` - унікальний ідентифікатор
// - `avg_color` - колір фотографії,
// - `alt` - опис фото,
// - `src` - об'єкт з розмірами картинок, нам цікавий розмір `large`
