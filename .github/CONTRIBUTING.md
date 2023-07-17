## Git

Follow the [Meme Battle styleguide](https://github.com/Meme-Battle/styleguide/blob/main/git.md).

## Folder Structure (general) ##

```bash
      NEXT_STRUCTURE
      ├── README.md - You are here!        
      ├── src/
      │   ├── app/
      │   │   └── page-example/ # Use lowercase letters in page names
      │   │   │      └── page.tsx # Lower case file name  ex: page.tsx
      │   │   │      └── styles.module.scss # Style name must follow pattern styles.module.scss
      │   │   └── page-example-two/ 
      │   │          └── page.tsx
      │   │          └── styles.module.scss
      │   ├── assets/
      │   │   └── images/
      │   ├── styles/  # global styles
      │   │   └── Global.scss # Always use lowercase letters in styles
      │   ├── components/
      │   │   ├── UI/ # UI Items ex : Button, Inputs
      │   │   │   └── Item-example # Capital first letter ex : Button
      │   │   │   │     └──  index.tsx
      │   │   │   │     └──  styles.module.scss
      │   │   │   └── Item-example-two 
      │   │   │         └──  index.tsx
      │   │   │         └──  styles.module.scss
      │   │   └── Component-example/ # Uppercase component name
      │   │   │        └──index.tsx # Files with lowercase first letter
      │   │   │        └──styles.module.scss # Styles with lowercase first letter
      │   │   └── Component-example-two/
      │   │           └──index.tsx
      │   │           └──styles.module.scss   
      │   ├── utils/ # reusable hooks
      │   │   └── # Start Hook name with capital letter 
      │   └── contexts/ # Api consumer handlers Ex: User information and authentication validation
      │   │    └── AuthContext.tsx # Files must start with uppercase letters
      │   ├── api/  # Project api
      │   │   └── Api.ts
```