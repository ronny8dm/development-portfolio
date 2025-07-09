// filepath: /Users/coderxx08/development/portfolio/src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/Theme-Provider';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { cn } from './lib/utils';
import Portfolio from './pages/Portfolio';
import BlogDetails from './pages/blog-details';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <TooltipProvider>
        <div className={cn(
          "min-h-screen bg-background font-sans antialiased"
        )}>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
          </Routes>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;