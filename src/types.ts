export interface NavLink {
  label: string
  href: string
}

export interface Service {
  title: string
  desc: string
}

export interface ProcessStep {
  no: string
  title: string
  desc: string
  time: string
}

export interface Reason {
  no: string
  title: string
  desc: string
}

export interface Stat {
  num: string
  label: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface ValuePoint {
  label: string
  text: string
}

export interface ContactInfo {
  waLink: string
  waDisplay: string
  email: string
  address: string
  mapsLink: string
}