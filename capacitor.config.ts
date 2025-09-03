import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.91f86e1cc9e64e07a597481d24975430',
  appName: 'PILA - Philippines Language Adventure',
  webDir: 'dist',
  server: {
    url: 'https://91f86e1c-c9e6-4e07-a597-481d24975430.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0038A8',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      spinnerColor: '#FCD116',
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;