export function formatDateToDDMMYYYY(date:Date) {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();

  return `${day}/${month}/${year}`;
}

const monthMap:Record<string,string> = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec"
};

interface TripTypes {
  "Zero Emission"?: number;
  "Public Transit"?: number;
  "Ride Share"?: number;
}

interface DataItem {
  total_trips: number;
  trip_types: TripTypes;
}

type OverViewData = Record<string, DataItem>;

interface TransformedData {
  name: string;
  ZeroEmission: number;
  PublicTransit: number;
  RideShare: number;
}

export const transformDataForOverViewGraph = (data:OverViewData):TransformedData[] => {
  if (!data) return [];
  return Object.entries(data).map(([key, value]) => {
    const [, month] = key.split("-");
    return {
      name: monthMap[month] || month,
      ZeroEmission: value?.trip_types["Zero Emission"] || 0,
      PublicTransit: value?.trip_types["Public Transit"] || 0,
      RideShare: value?.trip_types["Ride Share"] || 0, 
    };
  })};


