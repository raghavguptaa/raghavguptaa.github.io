// Shows attended, oldest first. Rendered as ticket stubs on the home page.
export type Concert = {
  artist: string;
  /** city or state the show was in */
  city: string;
  /** festival or venue, when it's worth naming */
  event?: string;
  /** "2025-04-21" or "2025-04" */
  when: string;
  /** a path under /public once a frame is picked */
  photo?: string;
  /** venue for the back of the ticket; the back falls back to `event`, then `city` */
  venue?: string;
  /** one line for the back of the ticket (who you went with, the song that did it) */
  note?: string;
};

export const concerts: Concert[] = [
  {
    artist: "Seedhe Maut, Arpit Bala, Chaar Diwaari",
    city: "Gurgaon",
    event: "Whipmantra 4.0",
    venue: "Dwarka",
    when: "2026-04-25",
  },
];