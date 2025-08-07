import { useCreateDirect } from "../index.tsx";

interface CreateDirectButtonProps {
  hostId: string;
  friendId: string;
  onSuccess?: (directId: string) => void;
  className?: string;
}

export const CreateDirectButton = ({
  hostId,
  friendId,
  onSuccess,
  className = "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",
}: CreateDirectButtonProps) => {
  const { createDirect } = useCreateDirect();

  const handleClick = async () => {
    const directId = await createDirect(hostId, friendId);
    if (directId && onSuccess) {
      onSuccess(directId);
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      Начать чат
    </button>
  );
};
