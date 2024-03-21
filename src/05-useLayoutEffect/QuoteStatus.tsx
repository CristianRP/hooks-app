export const QuoteStatus = ({ message = 'Loading', color }: { message: string, color?: string }) => {
  return (
    <div className={`p-4 bg-sky-400 rounded-md text-white w-400 ${color}`}>
      { message }
    </div>
  )
}
