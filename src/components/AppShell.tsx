import { Avatar, Body1, Button, Caption1, Divider, Tab, TabList, Toolbar, ToolbarButton, Title3 } from '@fluentui/react-components';
import { DarkThemeRegular, HomeRegular, LightbulbRegular, GridRegular, StackRegular } from '@fluentui/react-icons';
import type { MouseEvent, ReactNode } from 'react';

interface Props { path: string; dark: boolean; onNavigate: (path: string) => void; onToggleTheme: () => void; children: ReactNode; }
export function AppShell({ path, dark, onNavigate, onToggleTheme, children }: Props) {
  const go = (event: MouseEvent<HTMLAnchorElement>, next: string) => { event.preventDefault(); onNavigate(next); };
  return <div className="app-shell">
    <header className="site-header"><Toolbar><a className="brand" href="/" onClick={(event) => go(event, '/')}><Avatar name="Everton Silva" color="brand" /><span>Everton Silva</span></a><span className="header-spacer" /><Button appearance="subtle" icon={dark ? <LightbulbRegular /> : <DarkThemeRegular />} onClick={onToggleTheme} aria-label="Alternar tema" /></Toolbar></header>
    <nav className="site-nav" aria-label="Navegação principal"><TabList selectedValue={path} onTabSelect={(_, data) => onNavigate(String(data.value))}><Tab value="/" icon={<HomeRegular />}>Visão geral</Tab><Tab value="/projects" icon={<GridRegular />}>Projetos</Tab><Tab value="/stack" icon={<StackRegular />}>Stack</Tab></TabList></nav>
    <main className="site-main">{children}</main><footer className="site-footer"><Divider /><div><Caption1>Everton Silva · Software Engineer</Caption1><Caption1>Arquitetura para impacto real</Caption1></div></footer>
  </div>;
}
