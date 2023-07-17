## Git

Follow the [Meme Battle styleguide](https://github.com/Meme-Battle/styleguide/blob/main/git.md).

## Folder Structure (general) ##

```bash
      NEXT_STRUCTURE
      ├── src/
      │   ├── app/
      │   │   └── page-exemple/ #Utilizar letras minusculas nos nomes das paginas
                     └── page.tsx #Nome do arquivo minusculas  ex: page.tsx
      │   │   │      └── #Nome do estilo deve seguir o padrão styles.module.scss
      │   │   └── page-exemple-two/ 
      │   │          └── page.tsx
      │   │          └── styles.module.scss
      │   ├── assets/
      │   │   └── images/
      │   ├── styles/  #Estilos globais
      │   │   └── Global.scss #Utilizar sempre letras minuscula no estilos
      │   ├── components/
      │   │   ├── UI/ #Items de UI ex : Button, Inputs
      │   │   │   └── Item1 #Primeira letra maiuscula  ex : Button
      │   │   │         └──  index.tsx
      │   │   │         └──  styles.module.scss
      │   │   │   └── Item2 
      │   │   │         └──  index.tsx
      │   │   │         └──  styles.module.scss
      │   │   └── Component-Exemple/ #Nome dos componente maiusculo
      │   │   │        └──index.tsx #Arquivos com primeira letra minuscula
      │   │   │        └──styles.module.scss #Estilos com primeira letra minuscula 
      │   │   └── Component-exemple-two/
      │   │           └──index.tsx
      │   │           └──styles.module.scss   
      │   ├── utils/ #Hooks reutilizaveis 
      │   │   └── #Iniciar nome do Hook com letra maiuscula
      │   │   └── 
      │   └── contexts/ #Manipuladores de consumo da api, Ex: Informações dos usuarios e validação de de autenticação
      │   │    └── AuthContext.tsx #Arquivos devem iniciar com letras maiusculas
      │   ├── api/  #Api do projeto
      │   │   └── Api.ts
```

```
README.md - You are here!
```

