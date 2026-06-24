/**
 * A friendly, colourful school-abacus built in markup (no image dependency).
 * Each rod's right-hand bead cluster drifts gently along the wire on a loop —
 * so the tool reads as alive and easy to understand, without any jumpiness.
 */

const BEAD_COLORS = [
  "bg-tomato",
  "bg-sun",
  "bg-cobalt",
  "bg-pine",
  "bg-grape",
  "bg-sky",
  "bg-bubble",
];

// beads sitting on the LEFT (counted) side of each rod
const LEFT_COUNTS = [3, 5, 2, 6, 4, 1, 7];
const BEADS_PER_ROD = 9;

export function AbacusGraphic({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto w-full max-w-md rounded-[1.75rem] border-[6px] border-ink/85 bg-gradient-to-b from-saffron to-[hsl(28_90%_46%)] p-3 shadow-sticker ${className}`}
      aria-label="A colourful abacus with sliding beads"
      role="img"
    >
      <div className="rounded-2xl bg-paper px-4 py-5">
        <div className="flex flex-col gap-3.5">
          {LEFT_COUNTS.map((left, r) => {
            const color = BEAD_COLORS[r % BEAD_COLORS.length];
            return (
              <div key={r} className="relative flex h-5 items-center md:h-6">
                {/* rod / wire */}
                <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-ink/20" />
                <div className="relative flex w-full items-center justify-between">
                  {/* counted beads (left) */}
                  <div className="flex items-center gap-[3px]">
                    {Array.from({ length: left }).map((_, b) => (
                      <Bead key={`l${b}`} color={color} />
                    ))}
                  </div>
                  {/* remaining beads (right) gently drift toward the middle */}
                  <div
                    className="animate-bead flex items-center gap-[3px]"
                    style={{ animationDelay: `${r * 0.25}s` }}
                  >
                    {Array.from({ length: BEADS_PER_ROD - left }).map((_, b) => (
                      <Bead key={`r${b}`} color={color} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* little feet */}
      <span className="absolute -bottom-3 left-8 h-3 w-6 rounded-b-lg bg-ink/85" />
      <span className="absolute -bottom-3 right-8 h-3 w-6 rounded-b-lg bg-ink/85" />
    </div>
  );
}

function Bead({ color }: { color: string }) {
  return (
    <span className={`h-5 w-5 rounded-full border border-black/10 shadow-sm md:h-6 md:w-6 ${color}`}>
      {/* subtle highlight for a 3D bead look */}
      <span className="ml-1 mt-1 block h-1.5 w-1.5 rounded-full bg-white/45" />
    </span>
  );
}
