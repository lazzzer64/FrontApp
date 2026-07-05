import {createRoot} from 'react-dom/client'
import {StrictMode} from "react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import App from './components/App.tsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <StrictMode>
            <App/>
        </StrictMode>
    </QueryClientProvider>
)
