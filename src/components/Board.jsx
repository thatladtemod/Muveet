import Column from "./Column"

export default function Board() {
    const data = {
        'To Do' : ['Task One', 'Taskk two'],
        'In Progress' : ['Task three'],
        'Done' : ['Task four', 'Task five']
    }

  return (
    <div className='board'>
        {Object.entries(data).map(([column, tasks]) => (
            <Column key={column} title={column} tasks={tasks} />
        ))}
    </div>
  )
}