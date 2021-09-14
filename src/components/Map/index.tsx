import L from 'leaflet'
import { useRouter } from 'next/dist/client/router'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

type ImgPrimary = {
  url: string
  height: number
  width: number
}
type Icons = {
  url: string
  height: number
  width: number
}

export type Portfolio = {
  id: string

  heading: string
  slug: string
  sortDescription: string
  longDescription: string
  icons: Icons[]
  imgPrimary: {
    url: string
    height: number
    width: number
  }
  linkVercel: string
  linkGithub: string
}

export type MapProps = {
  portfolios?: Portfolio[]
}
const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}
export const surfCon = new L.Icon({
  iconUrl: 'https://image.flaticon.com/icons/png/512/2995/2995734.png',

  iconSize: [35, 35],
  shadowSize: [50, 64],

  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76]
})
export const whaleCon = new L.Icon({
  iconUrl:
    'https://img-premium.flaticon.com/png/512/3054/premium/3054836.png?token=exp=1631053897~hmac=7ce596ee40de2ed7fe6cbd61c4ca0766',

  iconSize: [35, 35],
  shadowSize: [50, 64],

  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76]
})

const Map = ({ places }: MapProps) => {
  console.log(places)
  const router = useRouter()
  return (
    <MapContainer
      center={[-28.238397634976877, -48.67871001697433]}
      zoom={10}
      style={{ height: `100%`, width: `100%` }}
      attributionControl={false}
    >
      <CustomTileLayer />
      {places?.map(({ id, slug, name, location, type }) => {
        const { latitude, longitude } = location

        return (
          <Marker
            icon={type === 'baleia' ? whaleCon : surfCon}
            key={`place-${id}`}
            position={[latitude, longitude]}
            title={name}
            eventHandlers={{
              click: () => {
                router.push(`/trip/${slug}`)
              }
            }}
          />
        )
      })}
    </MapContainer>
  )
}

export default Map
