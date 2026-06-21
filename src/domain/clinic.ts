import type { QuizConfig } from './quiz'

export type ServiceId = 'braces' | 'whitening' | 'caries' | 'veneers' | 'implants' | 'cleaning'

export interface PlaceholderText { value: string; placeholder: boolean; label: string }
export interface ImageAsset { src: string; alt: string; width: number; height: number; placeholder: boolean }
export interface ClinicProfile { name: PlaceholderText; description: PlaceholderText; logoText: PlaceholderText; address: PlaceholderText; phoneDisplay: PlaceholderText; whatsappNumber: PlaceholderText; workingHours: PlaceholderText[]; map: ImageAsset }
export interface Benefit { id: string; title: PlaceholderText; description: PlaceholderText; icon: string; placeholder: boolean }
export interface Service { id: ServiceId; name: PlaceholderText; description: PlaceholderText; priceFrom: PlaceholderText; featured: boolean; icon: string; whatsappContext: string }
export interface Doctor { id: string; photo: ImageAsset; name: PlaceholderText; specialization: PlaceholderText; experienceYears: number; summary: PlaceholderText; placeholder: boolean }
export interface TreatmentCase { id: string; serviceId: ServiceId; beforeImage: ImageAsset; afterImage: ImageAsset; summary: PlaceholderText; disclaimer: string; placeholder: boolean }
export interface Review { id: string; author: PlaceholderText; text: PlaceholderText; rating: 1 | 2 | 3 | 4 | 5; placeholder: boolean }
export interface HeroContent { eyebrow: string; title: string; description: string; trustItems: string[]; image: ImageAsset }
export interface LegalLinks { privacy: string; consent: string }
export interface ClinicContent { clinic: ClinicProfile; hero: HeroContent; benefits: Benefit[]; services: Service[]; quiz: QuizConfig; doctors: Doctor[]; cases: TreatmentCase[]; reviews: Review[]; legal: LegalLinks }
