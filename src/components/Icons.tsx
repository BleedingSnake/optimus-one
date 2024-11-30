import { LucideProps, MessageSquare, User } from 'lucide-react'

export const Icons = {
  user: User,
  logo: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 497 497">
    <defs>
      <linearGradient id="newGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ff7f50" />
        <stop offset="100%" stop-color="#ff4500" />
      </linearGradient>
    </defs>
    <g>
      {/* Outer Shape */}
      <path
        d="M248.5,0 C384,0 497,113 497,248.5 C497,384 384,497 248.5,497 C113,497 0,384 0,248.5 C0,113 113,0 248.5,0 Z"
        fill="url(#newGradient)"
      />
      {/* Inner Circular Design */}
      <circle cx="248.5" cy="248.5" r="150" fill="#ffffff" />
      <circle cx="248.5" cy="248.5" r="100" fill="#ff4500" opacity="0.8" />
      <circle cx="248.5" cy="248.5" r="50" fill="#ffffff" />
      {/* Decorative Lines */}
      <line
        x1="248.5"
        y1="98.5"
        x2="248.5"
        y2="398.5"
        stroke="#ff7f50"
        strokeWidth="5"
      />
      <line
        x1="98.5"
        y1="248.5"
        x2="398.5"
        y2="248.5"
        stroke="#ff7f50"
        strokeWidth="5"
      />
      {/* Small Decorative Circles */}
      <g fill="#ff7f50">
        <circle cx="148.5" cy="148.5" r="10" />
        <circle cx="348.5" cy="148.5" r="10" />
        <circle cx="148.5" cy="348.5" r="10" />
        <circle cx="348.5" cy="348.5" r="10" />
      </g>
    </g>
  </svg>
  ),
  google: (props: LucideProps) => (
    <svg {...props} viewBox='0 0 24 24'>
      <path
        d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
        fill='#4285F4'
      />
      <path
        d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
        fill='#34A853'
      />
      <path
        d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
        fill='#FBBC05'
      />
      <path
        d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
        fill='#EA4335'
      />
      <path d='M1 1h22v22H1z' fill='none' />
    </svg>
  ),
  commentReply: MessageSquare,
}
