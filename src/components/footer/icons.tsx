import React from 'react'

export interface IconProps {
  className?: string
  size?: number
  color?: string
  title?: string
}

export const LinkedInIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  title = 'LinkedIn',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      {title && (
        <title id={`linkedin-icon-title-${title.replace(/\s+/g, '-').toLowerCase()}`}>
          {title}
        </title>
      )}
      <path
        d="M19 3.5C19.5304 3.5 20.0391 3.71071 20.4142 4.08579C20.7893 4.46086 21 4.96957 21 5.5V19.5C21 20.0304 20.7893 20.5391 20.4142 20.9142C20.0391 21.2893 19.5304 21.5 19 21.5H5C4.46957 21.5 3.96086 21.2893 3.58579 20.9142C3.21071 20.5391 3 20.0304 3 19.5V5.5C3 4.96957 3.21071 4.46086 3.58579 4.08579C3.96086 3.71071 4.46957 3.5 5 3.5H19ZM18.5 19V13.7C18.5 12.8354 18.1565 12.0062 17.5452 11.3948C16.9338 10.7835 16.1046 10.44 15.24 10.44C14.39 10.44 13.4 10.96 12.92 11.74V10.63H10.13V19H12.92V14.07C12.92 13.3 13.54 12.67 14.31 12.67C14.6813 12.67 15.0374 12.8175 15.2999 13.0801C15.5625 13.3426 15.71 13.6987 15.71 14.07V19H18.5ZM6.88 9.06C7.32556 9.06 7.75288 8.883 8.06794 8.56794C8.383 8.25288 8.56 7.82556 8.56 7.38C8.56 6.45 7.81 5.69 6.88 5.69C6.43178 5.69 6.00193 5.86805 5.68499 6.18499C5.36805 6.50193 5.19 6.93178 5.19 7.38C5.19 8.31 5.95 9.06 6.88 9.06ZM8.27 19V10.63H5.5V19H8.27Z"
        fill={color}
      />
    </svg>
  )
}

export const EmailIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  title = 'Email',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-labelledby={`email-icon-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
      role="img"
    >
      {title && (
        <title id={`email-icon-title-${title.replace(/\s+/g, '-').toLowerCase()}`}>{title}</title>
      )}
      <path
        d="M20 4.5H4C2.9 4.5 2.01 5.4 2.01 6.5L2 18.5C2 19.6 2.9 20.5 4 20.5H20C21.1 20.5 22 19.6 22 18.5V6.5C22 5.4 21.1 4.5 20 4.5ZM20 8.5L12 13.5L4 8.5V6.5L12 11.5L20 6.5V8.5Z"
        fill={color}
      />
    </svg>
  )
}

export const PhoneIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
  title = 'Phone',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-labelledby={`phone-icon-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
      role="img"
    >
      {title && (
        <title id={`phone-icon-title-${title.replace(/\s+/g, '-').toLowerCase()}`}>{title}</title>
      )}
      <path
        d="M20.01 15.88C18.78 15.88 17.59 15.68 16.48 15.32C16.3061 15.2614 16.1192 15.2528 15.9406 15.2953C15.762 15.3377 15.599 15.4294 15.47 15.56L13.9 17.53C11.07 16.18 8.42 13.63 7.01 10.7L8.96 9.04C9.23 8.76 9.31 8.37 9.2 8.02C8.83 6.91 8.64 5.72 8.64 4.49C8.64 3.95 8.19 3.5 7.65 3.5H4.19C3.65 3.5 3 3.74 3 4.49C3 13.78 10.73 21.5 20.01 21.5C20.72 21.5 21 20.87 21 20.32V16.87C21 16.33 20.55 15.88 20.01 15.88Z"
        fill={color}
      />
    </svg>
  )
}
