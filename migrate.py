import os
import re

mapping = {
    "home_safedrive_pro_refined": "src/app/page.tsx",
    "our_courses_services_safedrive_pro_refined": "src/app/courses/page.tsx",
    "contact_us_safedrive_pro": "src/app/contact/page.tsx",
    "faq_safedrive_pro": "src/app/faq/page.tsx",
    "gift_cards_safedrive_pro": "src/app/gift-cards/page.tsx",
    "legal_information_safedrive_pro": "src/app/legal/page.tsx",
    "careers_safedrive_pro": "src/app/careers/page.tsx",
    "resources_hub_safedrive_pro_refined": "src/app/resources/page.tsx",
    "sign_in_safedrive_pro": "src/app/sign-in/page.tsx",
    "sign_up_safedrive_pro": "src/app/sign-up/page.tsx",
}

def html_to_jsx(html):
    # Extract contents inside <main> or just use body if <main> is missing.
    # We actually want the children of <main> if it exists.
    main_match = re.search(r'<main[^>]*>(.*?)</main>', html, re.DOTALL | re.IGNORECASE)
    if main_match:
        content = main_match.group(1)
    else:
        # Just grab between TopNavBar and Footer, heuristically
        content = html # Fallback, probably won't happen
        
    # Replace class with className
    content = content.replace('class=', 'className=')
    
    # Replace for= with htmlFor=
    content = content.replace('for=', 'htmlFor=')
    
    # Replace viewBox with viewBox
    content = content.replace('viewbox=', 'viewBox=')
    
    # Fix self-closing tags (img, input, hr, br)
    content = re.sub(r'<(img|input|hr|br)([^>]*?)(?<!/)>', r'<\1\2/>', content)

    # Some images might already have />. The regex above won't match if it ends with /> (because of `(?<!/)`). 
    # But wait, it might end with ` />` or `/>`.
    
    # Replace style="font-variation-settings: 'FILL' 1;" with inline object
    def parse_style(m):
        style_str = m.group(1)
        pairs = []
        for pair in style_str.split(';'):
            if not pair.strip():
                continue
            k, v = pair.split(':', 1)
            
            # camelCase the key
            parts = k.strip().split('-')
            camel_key = parts[0] + ''.join(word.capitalize() for word in parts[1:])
            
            val = v.strip().replace("'", "\\'")
            pairs.append(f"'{camel_key}': '{val}'")
        return 'style={{ ' + ', '.join(pairs) + ' }}'
        
    content = re.sub(r'style="([^"]*)"', parse_style, content)
    
    # Remove HTML comments to avoid JSX errors
    content = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', content, flags=re.DOTALL)
    
    return content.strip()

for folder, out_path in mapping.items():
    in_path = os.path.join('_legacy_design', folder, 'code.html')
    if not os.path.exists(in_path):
        print(f"Skipping {in_path}")
        continue
        
    with open(in_path, 'r', encoding='utf-8') as f:
        html = f.read()
        
    jsx_content = html_to_jsx(html)
    
    # Write to page.tsx
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    
    page_code = f"""export default function Page() {{
  return (
    <>
      {jsx_content}
    </>
  );
}}
"""
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(page_code)
    print(f"Migrated {folder} to {out_path}")
