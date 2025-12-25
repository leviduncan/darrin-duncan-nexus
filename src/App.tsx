import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import { useEffect } from 'react';
import '@n8n/chat/style.css';
import './App.css';
import { createChat } from '@n8n/chat';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://n8n.growclientsai.com/webhook/9e7393b8-409d-4fdd-895c-6d5f286dcb51/chat',
      initialMessages: [
		'Hey, Want to know more about Darrin\'s top skills?'
	],
	i18n: {
		en: {
			title: 'AI Resume Assistant',
			subtitle: "Here to answer your questions 24/7.",
			footer: '',
			getStarted: 'New Conversation',
			inputPlaceholder: 'Go ahead, ask a question...',
			closeButtonTooltip: 'Close',
		},
	},
	enableStreaming: false,
    });
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
