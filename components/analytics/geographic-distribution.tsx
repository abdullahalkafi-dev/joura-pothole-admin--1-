"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useRef, useState } from "react"
import { Loader } from "@googlemaps/js-api-loader"

interface GeoPoint {
  latitude: number
  longitude: number
  count: number
  issueType: string
}

interface GeographicDistributionProps {
  data?: GeoPoint[]
  isLoading: boolean
}

export function GeographicDistribution({ data, isLoading }: GeographicDistributionProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const heatmapRef = useRef<HTMLDivElement>(null)
  const [mapsLoaded, setMapsLoaded] = useState(false)
  const googleMapRef = useRef<google.maps.Map | null>(null)
  const heatmapInstance = useRef<google.maps.visualization.HeatmapLayer | null>(null)
  
  // Load Google Maps API
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "", // Add your API key to .env.local
      version: "weekly",
      libraries: ["visualization"]
    });
    
    loader.load().then(() => {
      setMapsLoaded(true);
    });
  }, []);

  // Initialize Map View
  useEffect(() => {
    if (isLoading || !data || !mapRef.current || !mapsLoaded) return;

    const center = { lat: 0, lng: 0 };
    
    // Calculate center of map from data points
    if (data.length > 0) {
      const sumLat = data.reduce((acc, point) => acc + point.latitude, 0);
      const sumLng = data.reduce((acc, point) => acc + point.longitude, 0);
      center.lat = sumLat / data.length;
      center.lng = sumLng / data.length;
    }

    // Create map
    const mapOptions = {
      center,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    
    const map = new google.maps.Map(mapRef.current, mapOptions);
    googleMapRef.current = map;

    // Add markers for each data point
    data.forEach((point) => {
      const marker = new google.maps.Marker({
        position: { lat: point.latitude, lng: point.longitude },
        map,
        title: `${point.issueType} (Count: ${point.count})`,
      });
      
      // Add info window with details
      const infoWindow = new google.maps.InfoWindow({
        content: `<div>
          <h3>${point.issueType}</h3>
          <p>Count: ${point.count}</p>
          <p>Location: ${point.latitude}, ${point.longitude}</p>
        </div>`
      });
      
      marker.addListener("click", () => {
        infoWindow.open({
          anchor: marker,
          map,
        });
      });
    });

    return () => {
      // No cleanup needed for map instance
    };
  }, [data, isLoading, mapsLoaded]);

  // Initialize Heatmap
  useEffect(() => {
    if (isLoading || !data || !heatmapRef.current || !mapsLoaded) return;

    const center = { lat: 0, lng: 0 };
    
    if (data.length > 0) {
      const sumLat = data.reduce((acc, point) => acc + point.latitude, 0);
      const sumLng = data.reduce((acc, point) => acc + point.longitude, 0);
      center.lat = sumLat / data.length;
      center.lng = sumLng / data.length;
    }

    const map = new google.maps.Map(heatmapRef.current, {
      center,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });

    // Convert data points for heatmap
    const heatmapData = data.map(point => {
      return {
        location: new google.maps.LatLng(point.latitude, point.longitude),
        weight: point.count
      };
    });
    
    // Create heatmap layer
    heatmapInstance.current = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      map: map,
      radius: 20,
    });

    return () => {
      // No cleanup needed
    };
  }, [data, isLoading, mapsLoaded]);

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Geographic Distribution</CardTitle>
          <CardDescription>Spatial distribution of reported issues</CardDescription>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[400px] w-full" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Geographic Distribution</CardTitle>
        <CardDescription>Spatial distribution of reported issues</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="map">
          <div className="flex justify-center mb-4">
            <TabsList>
              <TabsTrigger value="map">Map View</TabsTrigger>
              <TabsTrigger value="heatmap">Heatmap</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="map">
            <div ref={mapRef} className="h-[400px] w-full rounded-md overflow-hidden" />
          </TabsContent>

          <TabsContent value="heatmap">
            <div ref={heatmapRef} className="h-[400px] w-full rounded-md overflow-hidden" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
