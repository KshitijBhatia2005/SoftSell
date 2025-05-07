import { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon, ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

const demoQuestions = [
  'How do I sell my license?',
  'What software do you support?',
  'How fast is delivery?',
  'Is my purchase secure?',
];

const demoAnswers: { [key: string]: string } = {
  'How do I sell my license?':
    'To sell your license, click on "Sell License" in your dashboard, provide your license details, and follow the instructions. Our team will review and assist you through the process.',
  'What software do you support?':
    'We support a wide range of software including Microsoft, Adobe, Autodesk, and more. Contact us for specific inquiries!',
  'How fast is delivery?':
    'Most licenses are delivered instantly after payment. Some may require manual verification and can take up to 24 hours.',
  'Is my purchase secure?':
    'Absolutely! All transactions are encrypted and your data is protected. We guarantee the authenticity of every license.',
  'default':
    'This is a demo answer. Live AI chat is implemented, but not active due to lack of API credits. The backend is ready for real AI responses when credits are available.'
};

const AIDemoChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: '🤖 AI chat is implemented, but not live due to API credits. Demo answers below. The backend is ready for real AI responses when credits are available.'
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = (question?: string) => {
    const userMessage = question || input.trim();
    if (!userMessage) return;
    setMessages((msgs) => [
      ...msgs,
      { role: 'user', content: userMessage },
    ]);
    setInput('');
    setTimeout(() => {
      const answer = demoAnswers[userMessage] || demoAnswers['default'];
      setMessages((msgs) => [
        ...msgs,
        { role: 'ai', content: answer },
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-80 max-w-xs bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-primary-600/90 dark:bg-primary-700/90">
            <div className="flex items-center space-x-2 text-white">
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              <span className="font-semibold">AI Chat (Demo)</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-white hover:text-gray-200">
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
          {/* Messages */}
          <div className="px-4 py-2 space-y-2 bg-gray-50 dark:bg-gray-900 overflow-y-auto" style={{ maxHeight: '22rem', minHeight: '10rem' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`text-sm rounded-lg px-3 py-2 mb-1 max-w-[90%] ${msg.role === 'user' ? 'bg-primary-100 dark:bg-primary-900/40 self-end ml-auto text-right' : msg.role === 'ai' ? 'bg-white dark:bg-gray-800 border border-primary-100 dark:border-primary-900/40' : 'bg-yellow-50 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-100 border border-yellow-200 dark:border-yellow-800'}`}>
                {msg.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* Quick questions */}
          <div className="px-4 py-2 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-wrap gap-2">
            {demoQuestions.map((q) => (
              <button
                key={q}
                className="text-xs px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-800 transition"
                onClick={() => handleSend(q)}
              >
                {q}
              </button>
            ))}
          </div>
          {/* Input */}
          <form
            className="flex items-center gap-2 px-4 py-3 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900"
            onSubmit={e => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              className="flex-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
              placeholder="Type your question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={messages[messages.length-1]?.role === 'system'}
            />
            <button
              type="submit"
              className="btn-primary flex items-center gap-1 px-4 py-2 text-sm"
              disabled={!input.trim()}
            >
              Ask AI
              <PaperAirplaneIcon className="w-4 h-4 ml-1" />
            </button>
          </form>
          <div className="text-xs text-center text-gray-500 dark:text-gray-400 py-2 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            Live AI chat is implemented, but not active due to lack of API credits.<br />The backend is ready for real AI responses when credits are available.
          </div>
        </div>
      ) : (
        <button
          className="bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg p-4 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-400"
          onClick={() => setOpen(true)}
        >
          <ChatBubbleLeftRightIcon className="w-7 h-7" />
        </button>
      )}
    </div>
  );
};

export default AIDemoChatWidget; 