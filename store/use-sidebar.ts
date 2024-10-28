import { create } from "zustand";

interface SidebarStore {
  collapsed: boolean;
  showingSidebar: boolean;
  onExpand: () => void;
  onCollapse: () => void;
  onHideSidebar: () => void;
  onShowSidebar: () => void
};

export const useSidebar = create<SidebarStore>((set) => ({
  collapsed: false,
  showingSidebar: true,
  onExpand: () => set(() => ({ collapsed: false })),
  onCollapse: () => set(() => ({ collapsed: true })),
  onHideSidebar: () => set(() => ({ showingSidebar: false })),
  onShowSidebar: () => set(() => ({ showingSidebar: true })),
}));
