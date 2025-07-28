import TaskCard from './TaskCard';

export default function Column({title, tasks}) {
  return (
    <div className='board-column'>
        <h1 className='column-heading'>{title}</h1>
        {tasks.map((task, index) => (
            <TaskCard key={index} title={task} />
        ))}
    </div>
  )
}
