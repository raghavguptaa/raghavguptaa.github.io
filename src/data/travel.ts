// Places on the map, in the order the story visits them (oldest first after home).
// The home-page globe, its route and the travel timeline all render from this array.
export type Place = {
  id: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  note: string;
  /** "2024-01" or "2024" — shown on the timeline; omit if unknown */
  when?: string;
  /** a place visited again and again from `when` on, not a single trip */
  recurring?: boolean;
  /** a path under /public (for example "/travel/jaipur.jpg") when a photo exists for the place */
  photo?: string;
  /** Google Photos shared-album or Instagram post URL for the trip */
  link?: string;
  home?: boolean;
  /** reached overland from the previous stop on the same trip — drawn as a low ground leg, not a new flight */
  leg?: boolean;
  /** stand-in stop until real trip data is imported; rendered dimmed and marked TBA */
  placeholder?: boolean;
  /** how this stop was reached: shown as the transport line on the boarding pass ("By train").
   *  Omit when unknown: the pass shows "Overland" for `leg` stops, otherwise nothing. */
  mode?: "flight" | "train" | "road" | "bus" | "ferry";
  /** alt text for `photo`; defaults to "Photograph from {name}" */
  photoAlt?: string;
  /** CSS object-position for `photo` where a pass crops it tighter than its 3:2 frame */
  photoPosition?: string;
  /** "2024-12-26": last day of a multi-day visit; the pass shows "Dec 2024 – 26 Dec 2024" */
  until?: string;
  /** how many times a recurring stop has been visited; the pass adds "· 6 visits" to "on repeat" */
  visits?: number;
};

// Add a new place by copying one line below. Keep them oldest first.
// Optional per line: mode: "train" | "flight" | "road" | "bus", photo: "/travel/name.jpg", link: "https://..."
export const places: Place[] = [
  { id: "ghaziabad", name: "Ghaziabad", region: "Uttar Pradesh", lat: 28.67, lng: 77.44, note: "Home. Every route on this map starts in Delhi-NCR.", home: true },
  { id: "delhi", name: "Delhi", region: "Delhi", lat: 28.61, lng: 77.21, note: "The capital, right next door.", when: "2013" },
  { id: "jammu", name: "Jammu", region: "Jammu and Kashmir", lat: 32.73, lng: 74.86, note: "The first trip far from the plains.", when: "2014-04" },
  { id: "dharamshala", name: "Dharamshala", region: "Himachal Pradesh", lat: 32.22, lng: 76.32, note: "Mountains and cold air, under the Dhauladhar range.", when: "2016-05" },
  { id: "mcleod-ganj", name: "McLeod Ganj", region: "Himachal Pradesh", lat: 32.24, lng: 76.32, note: "Up the hill from Dharamshala, same trip.", when: "2016-05", leg: true },
  { id: "jaipur", name: "Jaipur", region: "Rajasthan", lat: 26.91, lng: 75.79, note: "The Pink City, first stop of a Rajasthan trip.", when: "2018-04" },
  { id: "ajmer", name: "Ajmer", region: "Rajasthan", lat: 26.45, lng: 74.64, note: "Next on the same Rajasthan trip.", when: "2018-04", leg: true },
  { id: "pushkar", name: "Pushkar", region: "Rajasthan", lat: 26.49, lng: 74.55, note: "A short hop from Ajmer, by the lake.", when: "2018-04", leg: true },
  { id: "mount-abu", name: "Mount Abu", region: "Rajasthan", lat: 24.59, lng: 72.71, note: "The end of the trip, in Rajasthan's only hill station.", when: "2018-04", leg: true },
  { id: "ramnagar", name: "Ramnagar", region: "Uttarakhand", lat: 29.39, lng: 79.13, note: "Forest country at the edge of the Kumaon hills.", when: "2020-02" },
  { id: "srm", name: "SRM IST", region: "Uttar Pradesh", lat: 28.8, lng: 77.54, note: "B.Tech in Computer Science, where the cybersecurity journey began.", when: "2023-08" },
  { id: "noida", name: "Noida", region: "Uttar Pradesh", lat: 28.54, lng: 77.39, note: "Across the river in Delhi-NCR.", when: "2023-11" },
  { id: "gurgaon", name: "Gurgaon", region: "Haryana", lat: 28.46, lng: 77.03, note: "The other side of the NCR.", when: "2024-12" },
  { id: "rishikesh", name: "Rishikesh", region: "Uttarakhand", lat: 30.09, lng: 78.27, note: "First trip into the Himalayan foothills.", when: "2025-01" },
  { id: "nainital", name: "Nainital", region: "Uttarakhand", lat: 29.38, lng: 79.46, note: "Lake town in the Kumaon hills.", when: "2025-03" },
  { id: "almora", name: "Almora", region: "Uttarakhand", lat: 29.6, lng: 79.66, note: "Further up the Kumaon hills, same trip as Nainital.", when: "2025-03", leg: true },
  { id: "dehradun", name: "Dehradun", region: "Uttarakhand", lat: 30.32, lng: 78.03, note: "Capital of Uttarakhand.", when: "2025-07" },
  { id: "ujjain", name: "Ujjain", region: "Madhya Pradesh", lat: 23.18, lng: 75.78, note: "The temple city on the Shipra.", when: "2025-12" },
  { id: "khandwa", name: "Khandwa", region: "Madhya Pradesh", lat: 21.83, lng: 76.35, note: "Same trip, further south in Madhya Pradesh.", when: "2025-12", leg: true },
  { id: "chennai", name: "Chennai", region: "Tamil Nadu", lat: 13.08, lng: 80.27, note: "The farthest south so far.", when: "2026-08" },
  { id: "mahabalipuram", name: "Mahabalipuram", region: "Tamil Nadu", lat: 12.62, lng: 80.19, note: "Shore temples and carved rocks by the Bay of Bengal.", when: "2026-10" },
  { id: "rameshwaram", name: "Rameshwaram", region: "Tamil Nadu", lat: 9.29, lng: 79.31, note: "The island town at the tip of Tamil Nadu, reached over the Pamban Bridge.", when: "2026-10" },
];
