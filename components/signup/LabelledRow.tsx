import FormRow from './FormRow'
import FieldError from './FieldError'

interface LabelledRowProps {
  id: string
  label: string
  required?: boolean
  valid: boolean
  errorText?: string
  children?: React.ReactNode
}

export const LabelledRow = ({
  id,
  label,
  children,
  valid,
  required = true,
  errorText = 'This field is required',
}: LabelledRowProps) => (
  <>
    <FormRow valid={valid}>
      <label htmlFor={id} className="text-sm font-favorit">
        {label}
        {required && <span className="text-md text-gray-500">*</span>}
      </label>
      {children}
    </FormRow>
    {!valid && <FieldError text={errorText} />}
  </>
)

export default LabelledRow