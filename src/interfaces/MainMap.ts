export interface ILatLng {
  lat: number,
  lng: number,
}

export interface IPropPointMap {
  id: number,
  title: string,
  latLng: ILatLng,
};