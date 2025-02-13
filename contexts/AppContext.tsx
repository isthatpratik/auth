"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"
import { demoVCs, demoStartups, demoMeetings, type Meeting } from "@/lib/demo-data"

interface AppContextType {
  vcs: typeof demoVCs
  startups: typeof demoStartups
  meetings: Meeting[]
  addMeeting: (meeting: Meeting) => void
  updateMeeting: (meetingId: string, status: "accepted" | "rejected") => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [meetings, setMeetings] = useState<Meeting[]>(demoMeetings)

  const addMeeting = (meeting: Meeting) => {
    setMeetings((prev) => [...prev, meeting])
  }

  const updateMeeting = (meetingId: string, status: "accepted" | "rejected") => {
    setMeetings((prev) => prev.map((meeting) => (meeting.id === meetingId ? { ...meeting, status } : meeting)))
  }

  return (
    <AppContext.Provider value={{ vcs: demoVCs, startups: demoStartups, meetings, addMeeting, updateMeeting }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}

