# Simple Authentication System

A modern, responsive client-side authentication system built with Next.js, TypeScript, and Tailwind CSS. This application demonstrates a clean login flow with Iranian mobile number validation and a user dashboard.

## 🚀 Features

- **📱 Login Page**: Iranian mobile number validation with multiple format support
- **🏠 Dashboard**: Welcome page with user profile information
- **🔒 Client-side Authentication**: Secure localStorage-based session management
- **📱 Responsive Design**: Mobile-first approach with desktop optimization
- **♿ Accessibility**: ARIA attributes, focus management, and semantic HTML
- **🎨 Modern UI**: Clean Tailwind CSS styling with dark mode support
- **⚡ Performance**: Optimized with Next.js App Router and TypeScript

## 📋 Supported Mobile Formats

The application validates Iranian mobile numbers in the following formats:

- `09xxxxxxxxx` (local format)
- `+989xxxxxxxxx` (international with +)
- `00989xxxxxxxxx` (international with 00)

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans & Geist Mono
- **API**: RandomUser.me for demo user data

## 📁 Project Structure

```
src/
├── app/
│   ├── dashboard/
│   │   └── page.tsx          # Dashboard page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Login page
├── components/
│   └── ui/
│       ├── Button.tsx        # Reusable button component
│       └── Input.tsx         # Reusable input component
├── lib/
│   ├── api.ts               # API configuration and functions
│   ├── auth.ts              # Authentication utilities
│   ├── config.ts            # App configuration
│   └── validation.ts        # Validation utilities
└── types/
    └── auth.ts              # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd simple-next-auth-system
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔄 User Flow

1. **Login Page**: User enters a valid Iranian mobile number
2. **Validation**: Client-side validation ensures proper format
3. **API Call**: System fetches user data from RandomUser.me API
4. **Storage**: User data is saved to localStorage
5. **Redirect**: User is redirected to the dashboard
6. **Dashboard**: Welcome message with user profile information
7. **Logout**: User can logout, clearing localStorage and returning to login

## 🎨 UI Components

### Input Component

- Label support with accessibility
- Error state handling
- Focus styles and validation
- Helper text display
- Dark mode support

### Button Component

- Multiple variants (primary, secondary, danger)
- Loading state with spinner
- Disabled state handling
- Size variations (sm, md, lg)
- Full accessibility support

## 🔧 Configuration

### API Configuration

The app uses a centralized configuration in `src/lib/config.ts`:

- API endpoints
- Validation patterns
- Storage keys
- Route definitions

### Validation

Iranian mobile number validation supports three formats:

- Local: `09xxxxxxxxx`
- International (+): `+989xxxxxxxxx`
- International (00): `00989xxxxxxxxx`

## 📱 Responsive Design

The application is built with a mobile-first approach:

- **Mobile**: Optimized touch targets and spacing
- **Tablet**: Enhanced layout with better use of space
- **Desktop**: Full-width layouts with improved navigation

## ♿ Accessibility Features

- **ARIA Labels**: Proper labeling for screen readers
- **Focus Management**: Visible focus indicators
- **Semantic HTML**: Proper heading structure and landmarks
- **Color Contrast**: WCAG compliant color schemes
- **Keyboard Navigation**: Full keyboard accessibility

## 🌙 Dark Mode

The application automatically detects system preferences and applies appropriate dark/light themes using CSS custom properties and Tailwind's dark mode utilities.

## 🚀 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

### Start Production Server

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

### Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## 🧪 Testing

To test the application:

1. **Valid Mobile Numbers**: Try `09123456789`, `+989123456789`, or `00989123456789`
2. **Invalid Numbers**: Test with incorrect formats to see validation
3. **Responsive Design**: Test on different screen sizes
4. **Accessibility**: Use screen readers and keyboard navigation

## 📝 Development Notes

- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured with Next.js recommended rules
- **Performance**: Optimized with Next.js App Router
- **Security**: Client-side only, no sensitive data handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:

1. Check the existing issues
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
