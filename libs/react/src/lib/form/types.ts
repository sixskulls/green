import { IValidator } from '@sebgroup/extract'
import { HTMLProps } from 'react'

export interface TextInputProps extends HTMLProps<HTMLInputElement> {
  type?: 'text' | 'email' | 'number'
  label?: string
  info?: string
  testId?: string
  expandableInfo?: string
  expandableInfoButtonLabel?: string
  validator?: IValidator
  onChangeInput?: (value: string) => string
}

export interface NumberInputProps extends TextInputProps {
  testId?: string
  min?: number
  max?: number
  step?: number
  expandableInfo?: string
  expandableInfoButtonLabel?: string
}

export interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  testId?: string
  validator?: IValidator
}

export interface RadioButtonProps extends HTMLProps<HTMLInputElement> {
  label: string
  testId?: string
  // TODO: This validator prop should be of type IValidator
  validator?: string
  value: string
}

export type InputListener<T> = (newValue?: T) => unknown
