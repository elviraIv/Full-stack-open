import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAnecdotes, updateAnecdote } from "./requests";

const App = () => {
  const queryClient = useQueryClient();

  const updateVoteAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["anecdotes"],
      });
    },
  });

  const {isPending, isError} = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAnecdotes,
  });

  if (isPending) {
    return <div>Loading data...</div>;
  }

  if (isError) {
    return <span>anecdote service not available due to problems in server</span>
  }

  const anecdotes = result.data;

  const handleVote = (anecdote) => {
    updateVoteAnecdoteMutation.mutate({
      ...anecdote, votes:anecdote.votes + 1
    })
  };

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
