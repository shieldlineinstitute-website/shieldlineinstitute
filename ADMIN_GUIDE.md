# Supabase Admin Quick Reference

## 📊 Dashboard Access
- **URL**: https://supabase.com/dashboard
- **Project ID**: flhsiawfmmsvozgbzkfq

## 📋 Managing FAQs

### View All FAQs
1. Log in to Supabase Dashboard
2. Go to **SQL Editor** or **Table Editor**
3. Click on **faqs** table

### Add New FAQ
1. Click the **faqs** table
2. Click **Insert row** button (⊕)
3. Fill in:
   - **heading**: The question/title
   - **body**: The answer/content
   - **subheading**: (optional) Additional context
4. Click **Save**

### Edit Existing FAQ
1. Click on the row you want to edit
2. Update the fields
3. Click **Save**

### Delete FAQ
1. Click on the row
2. Click the **...** menu → **Delete row**

---

## 📰 Managing Blog Posts

### View All Blog Posts
1. Log in to Supabase Dashboard
2. Go to **SQL Editor** or **Table Editor**
3. Click on **blog_posts** table

### Add New Blog Post
1. Click the **blog_posts** table
2. Click **Insert row** button (⊕)
3. Fill in:
   - **heading**: Article title
   - **body**: Article content
   - **category**: One of: "Safety Tip", "Medical Advice", "Guidance", or custom category
   - **subheading**: (optional) Subtitle or excerpt
4. Click **Save**

### Edit Existing Blog Post
1. Click on the row you want to edit
2. Update the fields
3. Click **Save**

### Delete Blog Post
1. Click on the row
2. Click the **...** menu → **Delete row**

---

## 🔍 Viewing Real-Time Updates

After adding/editing content:
1. The website fetches data automatically
2. Updates appear within seconds
3. **No need to redeploy!**

---

## 📱 Data Format Reference

### FAQs Table Columns
| Column | Type | Required | Description |
|--------|------|----------|-------------|
| id | UUID | Auto | Unique identifier |
| heading | text | Yes | Question text |
| body | text | Yes | Answer text |
| subheading | text | No | Optional subtitle |
| created_at | timestamp | Auto | When created |
| updated_at | timestamp | Auto | Last modified |

### Blog Posts Table Columns
| Column | Type | Required | Description |
|--------|------|----------|-------------|
| id | UUID | Auto | Unique identifier |
| heading | text | Yes | Article title |
| body | text | Yes | Article content |
| category | text | No | Category tag (e.g., "Safety Tip") |
| subheading | text | No | Optional subtitle |
| created_at | timestamp | Auto | When created |
| updated_at | timestamp | Auto | Last modified |

---

## ⚙️ Advanced Operations

### SQL to fetch all FAQs
```sql
SELECT * FROM faqs ORDER BY created_at ASC;
```

### SQL to fetch latest blog posts
```sql
SELECT * FROM blog_posts ORDER BY created_at DESC LIMIT 10;
```

### SQL to search FAQs
```sql
SELECT * FROM faqs 
WHERE heading ILIKE '%keyword%' 
   OR body ILIKE '%keyword%'
ORDER BY created_at ASC;
```

### SQL to delete old blog posts
```sql
DELETE FROM blog_posts 
WHERE created_at < NOW() - INTERVAL '1 year';
```

---

## 🆘 Troubleshooting

### Changes not appearing on website?
- ✓ Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- ✓ Check that content was actually saved in Supabase
- ✓ Wait a few seconds for the website to fetch updates

### Can't connect to Supabase?
- ✓ Check internet connection
- ✓ Verify `.env.local` file exists in project root
- ✓ Confirm credentials are correct in `.env.local`

### Table not showing data?
- ✓ Go to **SQL Editor** in Supabase
- ✓ Run: `SELECT * FROM faqs;` or `SELECT * FROM blog_posts;`
- ✓ Check if tables exist and contain data

---

## 📧 Support
- Supabase Documentation: https://supabase.com/docs
- React Hooks Documentation: https://react.dev/reference/react/hooks
