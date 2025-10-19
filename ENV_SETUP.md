# Landing Page Environment Variables

Create a `.env.local` file in the root of this directory (`beat-2257-landing/`):

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://eokbsjamszygzgmxuprj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Polar (server-side only - NO NEXT_PUBLIC prefix!)
POLAR_ACCESS_TOKEN=polar_pat_...
NEXT_PUBLIC_POLAR_PRODUCT_ID=prod_...

# URLs
NEXT_PUBLIC_LANDING_URL=https://beat2257.com
NEXT_PUBLIC_APP_URL=https://app.beat2257.com
```

## Where to Find Values

| Variable                        | Location                                           |
| ------------------------------- | -------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | Supabase Dashboard → Settings → API                |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Dashboard → Settings → API (anon key)     |
| `POLAR_ACCESS_TOKEN`            | Polar Dashboard → Settings → API Keys (create new) |
| `NEXT_PUBLIC_POLAR_PRODUCT_ID`  | Polar product page URL (e.g., `prod_...`)          |
| `NEXT_PUBLIC_LANDING_URL`       | Your landing page domain                           |
| `NEXT_PUBLIC_APP_URL`           | Your SaaS app domain                               |

## ⚠️ Security Notes

- **`POLAR_ACCESS_TOKEN`** has NO `NEXT_PUBLIC_` prefix (server-side only)
- Never commit `.env.local` to version control
- Add `.env.local` to `.gitignore`

## 📚 Need More Help?

See the main [POLAR_INTEGRATION_GUIDE.md](../POLAR_INTEGRATION_GUIDE.md) for complete setup instructions.
