export default function PaymentIcons({ size = "h-8" }: { size?: string }) {
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 50 32" className={`${size} w-auto rounded-lg`} aria-label="Visa" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="32" rx="6" fill="#1A1F71" />
        <text x="25" y="21" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="1">VISA</text>
      </svg>
      <svg viewBox="0 0 50 32" className={`${size} w-auto rounded-lg`} aria-label="Mastercard" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="32" rx="6" fill="#1C1C1C" />
        <circle cx="19" cy="16" r="11" fill="#EB001B" />
        <circle cx="31" cy="16" r="11" fill="#F79E1B" />
        <path d="M25 7.5a11 11 0 0 1 0 17A11 11 0 0 1 25 7.5z" fill="#FF5F00" />
      </svg>
    </div>
  );
}
