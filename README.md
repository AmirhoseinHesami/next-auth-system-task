# Simple Next.js Authentication System

A modern, accessible authentication system built with Next.js, TypeScript, and Tailwind CSS. Features Iranian mobile number validation, client-side authentication, and a beautiful responsive UI.

## 🚀 What is this?

A complete authentication flow with:

- **Login Page**: Iranian mobile number validation with real-time feedback
- **Dashboard**: User profile display with account statistics
- **Client-side Auth**: localStorage-based session management
- **Responsive Design**: Mobile-first approach with modern UI

## 🛠️ Technologies

- **Next.js 15** - App Router, Server Components
- **TypeScript** - Type safety and better DX
- **Tailwind CSS v4** - Utility-first styling
- **shadcn/ui** - Accessible component library
- **React 19** - Latest React features

## ⚡ Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd simple-next-auth-system

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📱 Features

- ✅ Iranian mobile number validation (3 formats supported)
- ✅ Real-time form validation with error states
- ✅ Loading states and smooth transitions
- ✅ Responsive design (mobile & desktop)
- ✅ Dark/Light theme support
- ✅ Accessibility compliant (WCAG 2.1)
- ✅ TypeScript throughout
- ✅ Modular component architecture

## 🎯 Usage

1. **Login**: Enter a valid Iranian mobile number (09xxxxxxxxx, +989xxxxxxxxx, or 00989xxxxxxxxx)
2. **Authentication**: System fetches user data from randomuser.me API
3. **Dashboard**: View profile information and account statistics
4. **Logout**: Clear session and return to login

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
│   ├── ui/             # Base components (Button, Input, Loading)
│   ├── forms/          # Form components
│   └── dashboard/      # Dashboard-specific components
├── hooks/              # Custom React hooks
├── lib/                # Utilities and configurations
└── types/              # TypeScript type definitions
```

## 🔧 Development

```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Build and test
npm run build
```

---

Built with ❤️ using Next.js and modern web standards.
