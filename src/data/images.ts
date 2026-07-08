// Real brand imagery lives in /src/assets and is imported so Vite can
// hash + optimize it. The `unsplash` helper remains for any spot still
// using a stock placeholder.
import containerPort from '../assets/container-port.jpg'
import steelStructure from '../assets/steel.jpg'
import cargoShip from '../assets/cargo-ship.jpg'
import teamwork from '../assets/teamwork.jpg'

export const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  hero: containerPort, // container port at dusk — hero background (supply chain)
  aboutMain: steelStructure, // industrial / energy facility
  aboutSmall1: cargoShip, // logistics / freight
  aboutSmall2: teamwork, // partnership — stacked hands
} as const
