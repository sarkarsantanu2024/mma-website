# Material Icons to Lucide React Conversion Guide

## Overview
This guide explains how to convert Material Icons to Lucide React icons in the remaining section components.

## Icon Mapping

### Common Material Icons → Lucide React Equivalents

| Material Icon | Lucide React | Import |
|--------------|--------------|---------|
| `check_circle` | `CheckCircle2` | `import { CheckCircle2 } from "lucide-react"` |
| `school` | `GraduationCap` | `import { GraduationCap } from "lucide-react"` |
| `location_on` | `MapPin` | `import { MapPin } from "lucide-react"` |
| `phone` | `Phone` | `import { Phone } from "lucide-react"` |
| `email` | `Mail` | `import { Mail } from "lucide-react"` |
| `schedule` | `Clock` | `import { Clock } from "lucide-react"` |
| `star` | `Star` | `import { Star } from "lucide-react"` |
| `people` / `group` | `Users` | `import { Users } from "lucide-react"` |
| `trending_up` | `TrendingUp` | `import { TrendingUp } from "lucide-react"` |
| `emoji_events` | `Award` / `Trophy` | `import { Award, Trophy } from "lucide-react"` |
| `send` | `Send` | `import { Send } from "lucide-react"` |
| `facebook` | `Facebook` | `import { Facebook } from "lucide-react"` |
| `photo_camera` / `instagram` | `Instagram` | `import { Instagram } from "lucide-react"` |
| `play_circle` / `youtube` | `Youtube` | `import { Youtube } from "lucide-react"` |
| `chat` / `whatsapp` | `MessageCircle` | `import { MessageCircle } from "lucide-react"` |
| `calendar_today` | `Calendar` | `import { Calendar } from "lucide-react"` |
| `image` | `ImageIcon` | `import { Image as ImageIcon } from "lucide-react"` |
| `auto_awesome` / `celebration` | `Sparkles` / `PartyPopper` | `import { Sparkles, PartyPopper } from "lucide-react"` |
| `lightbulb` | `Lightbulb` | `import { Lightbulb } from "lucide-react"` |
| `favorite` | `Heart` | `import { Heart } from "lucide-react"` |
| `shield` | `Shield` | `import { Shield } from "lucide-react"` |
| `calculate` | `Calculator` | `import { Calculator } from "lucide-react"` |
| `functions` | `Function` | `import { Function } from "lucide-react"` |
| `edit` | `Edit3` / `Pencil` | `import { Edit3, Pencil } from "lucide-react"` |
| `psychology` | `Brain` | `import { Brain } from "lucide-react"` |
| `menu_book` | `BookOpen` | `import { BookOpen } from "lucide-react"` |
| `speed` | `Zap` | `import { Zap } from "lucide-react"` |
| `neurology` | `Brain` | `import { Brain } from "lucide-react"` |

## Conversion Steps

### Step 1: Add "use client" directive (if needed)
If the component uses hooks (`useState`, `useEffect`, `useRef`), add this at the top:

```typescript
"use client"
```

### Step 2: Import Lucide icons
Replace Material Icons imports with Lucide:

```typescript
// Before (Material Icons - not explicitly imported, used via className)
<span className="material-icons">check_circle</span>

// After (Lucide React)
import { CheckCircle2 } from "lucide-react"
<CheckCircle2 className="w-5 h-5" />
```

### Step 3: Replace icon usage
Replace all instances of Material Icons with Lucide components:

```typescript
// Before
<span className="material-icons text-primary text-lg">location_on</span>

// After
<MapPin className="h-5 w-5 text-primary" />
```

### Step 4: Adjust sizing
Lucide icons use `w-` and `h-` classes. Common sizes:
- `text-sm` → `w-4 h-4`
- `text-base / text-lg` → `w-5 h-5`
- `text-xl` → `w-6 h-6`
- `text-2xl` → `w-8 h-8`
- `text-3xl` → `w-10 h-10`

## Files to Update

### Priority 1 (Critical - Used in multiple pages)
- [x] `HeroSection.tsx` - ✅ COMPLETED
- [ ] `ContactSection.tsx`
- [ ] `CoursesSection.tsx`
- [ ] `FranchiseSection.tsx`

### Priority 2 (Important)
- [ ] `TestimonialsSection.tsx`
- [ ] `EventsSection.tsx`
- [ ] `CentresSection.tsx`
- [ ] `WhyMMASection.tsx`

### Priority 3 (Nice to have)
- [ ] `HowItWorksSection.tsx`
- [ ] `GallerySection.tsx`

## Example Conversion

### Before (ContactSection.tsx):
```typescript
import { useState } from "react";

export function ContactSection() {
  // ... component code
  return (
    <div>
      <span className="material-icons text-primary text-lg">email</span>
      <span className="material-icons text-primary text-lg">phone</span>
    </div>
  );
}
```

### After (ContactSection.tsx):
```typescript
"use client"

import { useState } from "react"
import { Mail, Phone } from "lucide-react"

export function ContactSection() {
  // ... component code
  return (
    <div>
      <Mail className="h-5 w-5 text-primary" />
      <Phone className="h-5 w-5 text-primary" />
    </div>
  )
}
```

## Quick Find & Replace Patterns

Use these in your editor:

1. Add "use client" to components with hooks
2. Find: `className="material-icons([^"]*)"([^>]*)>([^<]+)</span>`
3. Replace based on the icon name in capture group 3

## Testing After Conversion

1. Run `npm install` to ensure all dependencies are installed
2. Run `npm run dev`
3. Check each page for:
   - Icons rendering correctly
   - No console errors
   - Proper sizing and alignment
   - Hover states working

## Notes

- Lucide icons are tree-shakeable, so only imported icons are included in the bundle
- All Lucide icons accept standard Tailwind classes
- Icons are SVG-based and scale perfectly
- Default size is 24x24px (equivalent to `w-6 h-6`)
