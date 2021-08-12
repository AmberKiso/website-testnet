interface FieldErrorProps {
  text: string
}
export const FieldError = ({ text }: FieldErrorProps) => (
  <div className="font-favorit bg-statusred text-white text-md text-center w-11/12 p-2 sm:w-7/12 mb-4">
    {text}
  </div>
)
export default FieldError