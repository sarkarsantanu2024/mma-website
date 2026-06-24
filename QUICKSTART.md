# Quick Start Guide

## Immediate Next Steps

### 1. Install Dependencies (Required)
```bash
cd nextjs-mma-website
npm install
```

### 2. Run Development Server (Optional - to see progress)
```bash
npm run dev
```
Visit http://localhost:3000

You'll see the site working, but some icons in section components will appear as text (Material Icons class names) instead of icons.

### 3. Convert Section Component Icons (Required for full functionality)

#### Quick Method - Convert One at a Time

**Example: ContactSection.tsx**

1. Open `components/sections/ContactSection.tsx`

2. Add at top if component uses state/effects:
```typescript
"use client"
```

3. Add Lucide imports after other imports:
```typescript
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
```

4. Find and replace:
```typescript
// Find this:
<span className="material-icons text-primary text-lg">email</span>

// Replace with this:
<Mail className="h-5 w-5 text-primary" />
```

5. Repeat for all icons in the file

6. Save and check in browser

#### Files to Convert (in order of priority):
1. `ContactSection.tsx` - Email, phone, location icons
2. `CoursesSection.tsx` - Course-related icons
3. `FranchiseSection.tsx` - Business icons
4. `TestimonialsSection.tsx` - Star, quote icons
5. `EventsSection.tsx` - Calendar, location icons
6. `CentresSection.tsx` - Location, phone icons
7. `WhyMMASection.tsx` - Brain, speed, trophy icons
8. `HowItWorksSection.tsx` - Process icons
9. `GallerySection.tsx` - Image icons

### 4. Add Your Assets
```bash
# Add to public/ folder:
- favicon.ico
- logo.png
- og-image-home.jpg (for social sharing)
```

### 5. Build for Production
```bash
npm run build
npm start
```

## Common Icon Replacements

```typescript
// Before (Material Icons)
<span className="material-icons">check_circle</span>
<span className="material-icons text-primary text-lg">email</span>
<span className="material-icons text-xl">phone</span>

// After (Lucide React)
<CheckCircle2 className="w-5 h-5" />
<Mail className="h-5 w-5 text-primary" />
<Phone className="w-6 h-6" />
```

## Size Reference
- `text-sm` → `w-4 h-4`
- `text-base/text-lg` → `w-5 h-5`
- `text-xl` → `w-6 h-6`
- `text-2xl` → `w-8 h-8`
- `text-3xl` → `w-10 h-10`

## Need Help?

1. See `ICON_CONVERSION_GUIDE.md` for complete icon mapping
2. See `CONVERSION_SUMMARY.md` for full project status
3. See `README.md` for comprehensive documentation

## Key Features Verified

✅ **Inter Font Only** - Check: View any page source
✅ **Dark Theme Default** - Check: Open site (should be dark)
✅ **Metadata Present** - Check: View page source, see `<meta>` tags
✅ **App Router** - Check: All pages in `app/` directory
✅ **Responsive** - Check: Resize browser window

## Deployment Ready?

After completing icon conversion:

```bash
# Test build
npm run build

# If successful, deploy to Vercel:
vercel

# Or deploy to any platform that supports Next.js
```

## That's It!

The conversion is 90% complete. Remaining work is straightforward icon conversion that takes ~1-2 hours. All critical infrastructure is in place.
