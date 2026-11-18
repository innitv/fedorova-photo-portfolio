import { useState } from 'react';
import { Preloader } from '@/components/layout/Preloader';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CollectionsView } from '@/features/collections/CollectionsView';
import { ServicesView } from '@/features/services/ServicesView';
import { ContactView } from '@/features/contact/ContactView';
import { DetailView } from '@/features/detail/DetailView';
import { usePreloader } from '@/hooks/usePreloader';
import { useRevealObserver } from '@/hooks/useRevealObserver';

export default function App() {
  const [activeView, setActiveView] = useState('collections');
  const [detail, setDetail] = useState(null);
  const { progress, isDone } = usePreloader(900);

  const revealKey = detail ? `detail-${detail.type}-${detail.id}` : activeView;
  useRevealObserver(revealKey);

  const handleNavigate = (view) => {
    setDetail(null);
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSeries = (id) => {
    setDetail({ type: 'series', id, returnTo: 'collections' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenService = (id) => {
    setDetail({ type: 'service', id, returnTo: 'services' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const headerActiveView = detail ? detail.returnTo : activeView;

  return (
    <>
      <Preloader progress={progress} isDone={isDone} />
      <Header activeView={headerActiveView} onNavigate={handleNavigate} />

      <main id="app-main">
        {detail ? (
          <DetailView
            detail={detail}
            onBack={() => handleNavigate(detail.returnTo)}
            onBook={() => handleNavigate('contact')}
          />
        ) : activeView === 'collections' ? (
          <CollectionsView onOpenSeries={handleOpenSeries} />
        ) : activeView === 'services' ? (
          <ServicesView onOpenService={handleOpenService} />
        ) : (
          <ContactView />
        )}
      </main>

      <Footer />
    </>
  );
}
