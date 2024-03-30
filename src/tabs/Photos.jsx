import { getPhotos } from 'apiService/photos';
import { Text, Form, PhotosGallery, Button } from 'components';
import { useState, useEffect } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  const onFormSubmit = query => {
    setQuery(query);
    setPhotos([]);
    setPage(1);
  };

  useEffect(() => {
    if (!query) return;

    const photosFromApi = async () => {
      try {
        const { photos } = await getPhotos(query, page);
        setPhotos(prevPhotos => [...prevPhotos, ...photos]);
      } catch (error) {
        console.log(error.message);
      }
    };
    photosFromApi();
  }, [page, query]);

  const onLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <>
      <Form onSubmit={onFormSubmit} />
      {photos.length ? (
        <PhotosGallery photos={photos} />
      ) : (
        <Text textAlign="center">Let`s begin search 🔎</Text>
      )}
      {photos.length > 0 && <Button onClick={onLoadMore}>Load more...</Button>}
    </>
  );
};
