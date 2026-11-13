// The rooms we show. The wide pooja-room shot (Balaji with the other
// deities on the shelf) is hanamakonda-pooja-room.jpg and is not in this
// list. Titles come from portfolio.projects by index.
export const CURATED_PHOTOS = [
  { image: "/portfolio/hanamakonda-hall-arch.jpg", index: 3, crop: "wide" },
  { image: "/portfolio/hanamakonda-kitchen.jpg", index: 1, crop: "wide" },
  { image: "/portfolio/hanamakonda-tv-unit.jpg", index: 0, crop: "tall" },
  { image: "/portfolio/hanamakonda-bedroom-olive.jpg", index: 2, crop: "wide" },
  { image: "/portfolio/hanamakonda-pooja-panel.jpg", index: 4, crop: "tall" },
  { image: "/portfolio/hanamakonda-wash-counter.jpg", index: 6, crop: "tall" },
];

export function curatedPhotos(projects) {
  return CURATED_PHOTOS.map((photo) => ({
    ...photo,
    title: projects[photo.index].title,
    location: projects[photo.index].location,
  }));
}
