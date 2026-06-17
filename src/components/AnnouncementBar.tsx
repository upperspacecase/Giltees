// Thin rotating announcement bar at the very top, matching the reference.
const messages = [
  "Free shipping on orders over $75",
  "Shadow work you can wear — every body, every gender, XS–4XL",
  "Each tee ships with its own practice card",
];

export function AnnouncementBar() {
  return (
    <div className="bg-ink text-paper">
      <div className="container-x flex h-9 items-center justify-center overflow-hidden">
        <p className="truncate text-[11px] font-medium uppercase tracking-widest2">
          {messages.join("  ·  ")}
        </p>
      </div>
    </div>
  );
}
