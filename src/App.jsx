import React from 'react';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto p-6">
        <KanbanBoard />
      </main>
      <Footer />
    </div>
  );
}

export default App;