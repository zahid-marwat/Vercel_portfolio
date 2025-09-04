const fs = require('fs');
const path = require('path');

// Files to clean
const filesToClean = [
  'src/components/sections/ProjectsSection.tsx',
  'src/components/sections/ExperienceSection.tsx',
  'src/components/sections/CTASection.tsx',
  'src/components/sections/TechStackSection.tsx',
  'src/components/ParticleBackground.tsx',
  'src/app/projects/page.tsx'
];

filesToClean.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove repeat: Infinity from transitions
    content = content.replace(/repeat:\s*Infinity,?\s*/g, '');
    
    // Clean up any double commas that might result
    content = content.replace(/,\s*,/g, ',');
    
    // Clean up trailing commas before closing braces
    content = content.replace(/,(\s*})/g, '$1');
    
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned infinity animations from: ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All infinity animations removed!');
