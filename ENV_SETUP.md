# Landing Page Environment Variables

Create a `.env.local` file in the root of this directory (`beat-2257-landing/`):

```env
# Supabase (for auth tracking only)
NEXT_PUBLIC_SUPABASE_URL=https://eokbsjamszygzgmxuprj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# URLs
NEXT_PUBLIC_APP_URL=https://app.beat2257.com
```

## Where to Find Values

| Variable                        | Location                                       |
| ------------------------------- | ---------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | Supabase Dashboard → Settings → API            |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Dashboard → Settings → API (anon key) |
| `NEXT_PUBLIC_APP_URL`           | Your SaaS app domain                           |

## 📝 Notes

- **Landing page is now a pure marketing site** - No Polar checkout logic
- Auth tracking is kept (read-only) to show user email and "Continue To App" when signed in
- All payment/checkout logic has been moved to the SaaS app
- Never commit `.env.local` to version control

## 📚 Need More Help?

See the main [POLAR_INTEGRATION_GUIDE.md](../POLAR_INTEGRATION_GUIDE.md) or [REFACTOR_SUMMARY.md](../REFACTOR_SUMMARY.md) for complete setup instructions.
