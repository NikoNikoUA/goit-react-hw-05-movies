import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchReview } from '../../utils/Api';
import { Container, Author, Text } from './Review.styled';
import Loader from '../Loader/Loader';

const Review = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReview] = useState([]);
  console.log(reviews);

  const { movieId } = useParams();
  useEffect(() => {
    const controller = new AbortController();

    async function getReview() {
      try {
        setLoading(true);
        setError(false);
        const fetchedReview = await fetchReview(movieId, {
          signal: controller.signal,
        });

        setReview(fetchedReview.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    getReview();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <Container>
      {loading && <Loader />}
      {error &&
        toast.error(`Whoops, something went wrong. Try reloading the page`)}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            const { content, author } = review;
            return (
              <li key={author}>
                <Author>{author}</Author>
                <Text>{content}</Text>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There are no reviews for this movie</p>
      )}
      <ToastContainer autoClose={4000} theme="colored" />
    </Container>
  );
};

export default Review;
