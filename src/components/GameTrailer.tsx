import useTrailers from "../hooks/useTrailers";

interface GameTrailerProps {
  gameId?: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
  if (!gameId) return null;

  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const firstTrailer = data?.results[0];

  return (
    <video
      src={firstTrailer?.data[480]}
      poster={firstTrailer?.preview}
      controls
    />
  );
};

export default GameTrailer;
