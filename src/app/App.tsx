import { FluentProvider, createLightTheme, createDarkTheme, type BrandVariants } from '@fluentui/react-components';
import { useEffect, useState } from 'react';
import { AppShell } from '../components/AppShell';
import { OverviewPage } from '../pages/OverviewPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { StackPage } from '../pages/StackPage';

const brand: BrandVariants = { 10: '#060F27', 20: '#0A1B49', 30: '#0E2A6E', 40: '#103C9A', 50: '#1456D9', 60: '#296CE1', 70: '#477FE6', 80: '#6593EB', 90: '#83A7F0', 100: '#A0BAF4', 110: '#BBD0FF', 120: '#D0DEFF', 130: '#E0EAFF', 140: '#ECF2FF', 150: '#F4F7FF', 160: '#FAFBFF' };
const lightTheme = createLightTheme(brand);
const darkTheme = createDarkTheme(brand);

export function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [dark, setDark] = useState(() => localStorage.getItem('app-theme') === 'dark');

  useEffect(() => { const onPop = () => setPath(window.location.pathname); window.addEventListener('popstate', onPop); return () => window.removeEventListener('popstate', onPop); }, []);
  const navigate = (nextPath: string) => { window.history.pushState({}, '', nextPath); setPath(nextPath); };
  const page = path === '/projects' ? <ProjectsPage /> : path === '/stack' ? <StackPage /> : <OverviewPage />;

  return <FluentProvider theme={dark ? darkTheme : lightTheme} className="app-provider"><AppShell path={path} dark={dark} onNavigate={navigate} onToggleTheme={() => { const next = !dark; setDark(next); localStorage.setItem('app-theme', next ? 'dark' : 'light'); }}>{page}</AppShell></FluentProvider>;
}