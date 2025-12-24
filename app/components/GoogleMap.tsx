interface GoogleMapProps {
  address: string;
  height?: string;
  className?: string;
}

export function GoogleMap({ 
  address, 
  height = "500px",
  className = "" 
}: GoogleMapProps) {
  // Using exact coordinates from Google Maps place URL
  // Coordinates: 23.5841706, 72.3524162 (latitude, longitude)
  // This ensures the marker pin appears at the exact location
  const latitude = 23.5841706;
  const longitude = 72.3524162;
  
  // Using coordinates in the embed URL ensures a marker pin appears
  // Format: https://www.google.com/maps?q=LAT,LNG&output=embed
  // This format guarantees a red marker pin at the exact coordinates
  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&output=embed&hl=en&z=16&t=m`;

  return (
    <div className={`w-full ${className} relative`} style={{ height }}>
      <iframe
        src={mapUrl}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label={`Map showing ${address}`}
        className="w-full"
        title="Kaushik Road Technologies Location"
      />
    </div>
  );
}

