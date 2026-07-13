// Real brand imagery lives in /src/assets and is imported so Vite can
// hash + optimize it.
import containerPort from '../assets/container-port.jpg'
import steelStructure from '../assets/steel.jpg'

export const images = {
  hero: containerPort, // container port at dusk — hero background (supply chain)
  aboutMain: steelStructure, // industrial / energy facility
} as const
