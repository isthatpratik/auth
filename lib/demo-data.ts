export const demoVCs = [
  { id: "vc1", name: "Acme Ventures", email: "contact@acmeventures.com" },
  { id: "vc2", name: "TechFund Capital", email: "info@techfundcapital.com" },
  { id: "vc3", name: "Innovation Investors", email: "hello@innovationinvestors.com" },
]

export const demoStartups = [
  {
    id: "startup1",
    name: "AI Solutions Ltd.",
    email: "contact@aisolutions.com",
    category: "Artificial Intelligence",
    financials: {
      revenue: 1000000,
      arr: 800000,
      ebitda: 200000,
      equity: 5000000,
    },
  },
  {
    id: "startup2",
    name: "EcoTech Innovations",
    email: "info@ecotechinnovations.com",
    category: "CleanTech",
    financials: {
      revenue: 1500000,
      arr: 1200000,
      ebitda: 300000,
      equity: 7000000,
    },
  },
  {
    id: "startup3",
    name: "HealthTech Systems",
    email: "contact@healthtechsystems.com",
    category: "HealthTech",
    financials: {
      revenue: 2000000,
      arr: 1800000,
      ebitda: 400000,
      equity: 10000000,
    },
  },
]

export type MeetingStatus = "pending" | "accepted" | "rejected"

export interface Meeting {
  id: string
  vcId: string
  startupId: string
  requesterId: string
  status: MeetingStatus
  dateTime: string
}

export const demoMeetings: Meeting[] = []

