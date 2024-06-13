

const Content = ({parts}) => {
  console.log(parts);
  return (
    <>
    {
      parts.map((part, i) => {
        return (<p key={i}>{part.name} {part.exercises}</p>)
      })
    }
    </>
  )
}

export default Content