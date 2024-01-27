import useTrailers from "../hooks/useTrailers";

interface GameTrailerProps {
  gameId?: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
  if (!gameId) return null;

  const { data: trailers, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const firstTrailer = trailers?.results[0];

  if (!firstTrailer?.data[480]) return null;

  return (
    <video
      src={firstTrailer?.data[480]}
      poster={firstTrailer?.preview}
      width="100%"
      controls
    />
  );
};

export default GameTrailer;
