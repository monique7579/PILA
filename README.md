# PILA - Philippines Language Adventure

A beautiful, gamified language learning app for Philippine languages, built with React and deployable as a mobile app using Capacitor.

## Features

- 🇵🇭 Learn Tagalog and Bisaya
- 🎮 Duolingo-style gamified learning
- 📱 Mobile-first responsive design  
- 🏆 Progress tracking with streaks and achievements
- 🎨 Beautiful Filipino flag-inspired design
- 📲 Cross-platform mobile app support

## Getting Started

### Web Development

1. Clone this repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

### Mobile App Development

PILA uses Capacitor for cross-platform mobile development. To run on mobile devices:

1. **Setup**: First, export this project to your GitHub repository via the "Export to Github" button
2. **Clone locally**: `git clone <your-repo-url> && cd <project-name>`
3. **Install dependencies**: `npm install`
4. **Add platforms**: 
   - For iOS: `npx cap add ios` (requires macOS with Xcode)
   - For Android: `npx cap add android` (requires Android Studio)
5. **Build project**: `npm run build`
6. **Sync native code**: `npx cap sync`
7. **Run on device**:
   - iOS: `npx cap run ios`
   - Android: `npx cap run android`

**Note**: For mobile development, you'll need:
- **iOS**: macOS with Xcode installed
- **Android**: Android Studio installed

For detailed mobile setup instructions, visit: https://lovable.dev/blogs/TODO

## Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui with custom Filipino-themed variants
- **Mobile**: Capacitor for cross-platform deployment
- **Routing**: React Router
- **State Management**: React Query
- **Design System**: Custom Filipino flag-inspired color palette

## Design System

PILA uses a beautiful design system inspired by the Filipino flag:
- **Primary**: Deep Filipino blue (#0038A8)
- **Secondary**: Vibrant Filipino red (#CE1126) 
- **Accent**: Golden yellow (#FCD116)
- **Gradients**: Hero gradients combining flag colors
- **Typography**: Clean, mobile-optimized fonts

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base shadcn components
│   ├── language-card.tsx
│   ├── lesson-node.tsx
│   └── ...
├── pages/               # Route components
│   ├── Home.tsx         # Main dashboard
│   ├── Lessons.tsx      # Lesson selection
│   ├── Lesson.tsx       # Individual lesson
│   └── ...
├── assets/              # Images and static files
└── lib/                 # Utilities
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes following the design system
4. Test on both web and mobile
5. Submit a pull request

## License

MIT License - see LICENSE file for details

---

**Maligayang pagdating sa PILA!** 🇵🇭
