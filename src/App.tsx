import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://n8n-hyper.onrender.com/webhook/9e7393b8-409d-4fdd-895c-6d5f286dcb51/chat',
      initialMessages: [
		'Hello! and welcome.',
		'Want to know my top skills?'
	],
	i18n: {
		en: {
			title: 'AI Resume Assistant',
			subtitle: "Here to help you 24/7.",
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
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
