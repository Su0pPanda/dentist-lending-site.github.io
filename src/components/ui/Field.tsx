import { forwardRef, type InputHTMLAttributes, type SelectHTMLAttributes } from 'react'

interface BaseProps { label: string; error?: string; hint?: string }
type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement> & { as?: 'input'; options?: never }
type SelectProps = BaseProps & SelectHTMLAttributes<HTMLSelectElement> & { as: 'select'; options: { value: string; label: string }[] }

export const Field = forwardRef<HTMLInputElement | HTMLSelectElement, InputProps | SelectProps>(function Field(props, ref) {
  const { label, error, hint, id, ...controlProps } = props
  const describedBy = [error ? `${id}-error` : '', hint ? `${id}-hint` : ''].filter(Boolean).join(' ') || undefined
  return <div className="field">
    <label className="field__label" htmlFor={id}>{label}</label>
    {props.as === 'select'
      ? <select ref={ref as React.Ref<HTMLSelectElement>} id={id} aria-invalid={Boolean(error)} aria-describedby={describedBy} {...controlProps as SelectHTMLAttributes<HTMLSelectElement>}><option value="">Выберите вариант</option>{props.options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select>
      : <input ref={ref as React.Ref<HTMLInputElement>} id={id} aria-invalid={Boolean(error)} aria-describedby={describedBy} {...controlProps as InputHTMLAttributes<HTMLInputElement>} />}
    {hint && <small id={`${id}-hint`} className="field__hint">{hint}</small>}
    {error && <small id={`${id}-error`} className="field__error">{error}</small>}
  </div>
})
