import { create } from 'zustand'

interface DashboardState {
  selectedDashboard: string
  setSelectedDashboard: (dashboard: string) => void
}

export const useDashboardStore = create<DashboardState>((set) => ({
  selectedDashboard: 'main',
  setSelectedDashboard: (dashboard) =>
    set({ selectedDashboard: dashboard }),
}))
