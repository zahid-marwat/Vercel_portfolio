const fs = require('fs');

let content = fs.readFileSync('src/app/contact/page.tsx', 'utf8');

// Remove Float3D imports
content = content.replace(/import.*Float3D.*Diamond3D.*Cube3D.*from.*3DEffects.*;/, 
    `import { Card3D, Text3D, Button3D } from '../../components/animations/3DEffects'`);

// Remove Float3D opening tags
content = content.replace(/<Float3D[^>]*>/g, '');

// Remove Float3D closing tags
content = content.replace(/<\/Float3D>/g, '');

// Remove standalone Diamond3D and Cube3D elements
content = content.replace(/<Diamond3D[^>]*\s*\/>/g, '');
content = content.replace(/<Cube3D[^>]*\s*\/>/g, '');

fs.writeFileSync('src/app/contact/page.tsx', content);
console.log('Contact page cleaned!');
