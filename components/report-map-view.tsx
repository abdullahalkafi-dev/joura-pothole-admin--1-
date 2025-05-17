// "use client"

// import { useEffect, useRef } from "react"

// interface ReportMapViewProps {
//   latitude: number
//   longitude: number
// }

// export function ReportMapView({ latitude, longitude }: ReportMapViewProps) {
//   const mapRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     // This is a placeholder for map integration
//     // In a real implementation, you would use a library like Leaflet or Google Maps

//     if (!mapRef.current) return

//     const mapContainer = mapRef.current

//     // Create a simple placeholder map with the location marker
//     mapContainer.innerHTML = `
//       <div class="flex items-center justify-center h-full w-full bg-muted relative">
//         <div class="absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%)">
//           <div class="flex flex-col items-center">
//             <div class="text-primary animate-bounce">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
//             </div>
//             <div class="text-xs mt-2 text-center">
//               <div>Latitude: ${latitude.toFixed(6)}</div>
//               <div>Longitude: ${longitude.toFixed(6)}</div>
//             </div>
//           </div>
//         </div>
//         <div class="absolute bottom-2 right-2 text-xs text-muted-foreground">
//           Map placeholder - integrate with Leaflet or Google Maps
//         </div>
//       </div>
//     `

//     return () => {
//       mapContainer.innerHTML = ""
//     }
//   }, [latitude, longitude])

//   return <div ref={mapRef} className="h-full w-full" />
// }
"use client"

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"
import { useMemo } from "react"

interface ReportMapViewProps {
  latitude: number
  longitude: number
}

const containerStyle = {
  width: "100%",
  height: "100%",
}

export function ReportMapView({ latitude, longitude }: ReportMapViewProps) {
  const center = useMemo(() => ({ lat: latitude, lng: longitude }), [latitude, longitude])

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, // put your key in .env
  })

  if (loadError) return <div>Error loading map</div>
  if (!isLoaded) return <div>Loading map...</div>

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      <Marker position={center} />
    </GoogleMap>
  )
}
