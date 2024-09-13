import { useQuery } from '@tanstack/react-query'
import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'
import { Dialog } from './components/ui/dialog'
import { getSummary } from './http/get-summary'
import { EmptyGoals } from './components/empty-goals'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 seconds
    //Create an intern cache for the result of this query for 60 seconds
    //i.e if my application need this data on a 60 seconds interval, it won't make a new request, it will just return the response on cache
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}
