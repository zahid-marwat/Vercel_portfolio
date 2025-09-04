'use client'
import { FadeInUp, StaggerContainer, ScaleIn, HoverCard } from '../animations'
import { NeonGlow, GlitchEffect } from '../animations/SpecialEffects'
import { motion } from 'framer-motion'

const TechStackSection = () => {
  const technologies = [
    {
      name: 'Python',
      icon: '🐍',
      category: 'Programming',
      proficiency: 90
    },
    {
      name: 'TensorFlow',
      icon: '🧠',
      category: 'AI/ML',
      proficiency: 85
    },
    {
      name: 'PyTorch',
      icon: '🔥',
      category: 'AI/ML',
      proficiency: 80
    },
    {
      name: 'OpenCV',
      icon: '👁️',
      category: 'Computer Vision',
      proficiency: 92
    },
    {
      name: 'JavaScript',
      icon: '⚡',
      category: 'Programming',
      proficiency: 65
    },
    {
      name: 'React',
      icon: '⚛️',
      category: 'Frontend',
      proficiency: 60
    },
    // {
    //   name: 'Next.js',
    //   icon: '🔺',
    //   category: 'Frontend',
    //   proficiency: 85
    // },
    {
      name: 'Node.js',
      icon: '🟢',
      category: 'Backend',
      proficiency: 65
    },
    // {
    //   name: 'Docker',
    //   icon: '🐳',
    //   category: 'DevOps',
    //   proficiency: 80
    // },
    // {
    //   name: 'AWS',
    //   icon: '☁️',
    //   category: 'Cloud',
    //   proficiency: 70
    // },
    // {
    //   name: 'MongoDB',
    //   icon: '🍃',
    //   category: 'Database',
    //   proficiency: 75
    // },
    {
      name: 'Git',
      icon: '📝',
      category: 'Tools',
      proficiency: 80
    }
  ]

  const categories = Array.from(new Set(technologies.map(tech => tech.category)))

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Modern Tech Stack</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Technologies and tools I use to build innovative solutions
            </p>
          </div>
        </FadeInUp>

        {/* Technology Grid */}
        <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <NeonGlow key={index} color={index % 2 === 0 ? "#3b82f6" : "#8b5cf6"}>
              <HoverCard
                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 text-center relative overflow-hidden"
                hoverScale={1.08}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-blue-500/5"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                      "linear-gradient(225deg, rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))",
                      "linear-gradient(315deg, rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05))"
                    ]
                  }}
                  transition={{
                    duration: 6,
                    ease: "linear"
                  }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-4xl mb-3 inline-block"
                    whileHover={{ 
                      rotate: [0, -15, 15, -15, 0],
                      // scale: [1, 1.2, 1.1, 1.2, 1]
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-semibold text-white mb-2"
                    
                  >
                    {tech.name}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-primary-400 mb-3"
                  >
                    {tech.category}
                  </motion.p>
                  
                  {/* Enhanced Proficiency Bar */}
                  <div className="w-full bg-dark-700 rounded-full h-3 mb-2 overflow-hidden relative">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20"
                    
                    />
                    <motion.div 
                      className="relative bg-gradient-to-r from-primary-500 to-blue-500 h-3 rounded-full shadow-lg"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                  <motion.span 
                    className="text-xs text-gray-400 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 1.5 }}
                  >
                    {tech.proficiency}%
                  </motion.span>
                </div>
              </HoverCard>
            </NeonGlow>
          ))}
        </StaggerContainer>

        {/* Code Showcase Preview */}
        <ScaleIn delay={0.5}>
          <GlitchEffect>
            <div className="mt-16 p-8 rounded-2xl bg-dark-800/50 border border-white/10 relative overflow-hidden">
              {/* Animated Background Grid */}
              <motion.div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px"
                }}
                animate={{
                  backgroundPosition: ["0px 0px", "20px 20px"]
                }}
                transition={{
                  duration: 4,
                  ease: "linear"
                }}
              />
              
              <FadeInUp delay={0.6}>
                <h3 className="text-2xl font-bold text-white mb-6 text-center relative z-10">
                  Code <span className="gradient-text">Showcase</span>
                </h3>
              </FadeInUp>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                <motion.div 
                  className="code-block group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="flex items-center justify-between mb-4 p-3 bg-dark-700/50 rounded-t-lg"
                    whileHover={{ backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                  >
                    <motion.span 
                      className="text-primary-400 text-sm font-medium"
                      whileHover={{ color: "#60a5fa" }}
                    >
                      Computer Vision
                    </motion.span>
                    <span className="text-xs text-gray-400">Python • TensorFlow</span>
                    <motion.div
                      className="flex space-x-1"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="bg-dark-900/50 p-4 rounded-b-lg relative overflow-hidden"
                    whileHover={{
                      boxShadow: "inset 0 0 20px rgba(59, 130, 246, 0.1)"
                    }}
                  >
                    <motion.pre 
                      className="text-sm text-gray-300 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
{`model = maskrcnn_resnet50_fpn(pretrained=False, num_classes=4)
model.load_state_dict(torch.load("maskrcnn_resnet50_trained.pth"))
model.eval()

image = Image.open("3.jpg").convert("RGB")
img_tensor = F.to_tensor(image)

with torch.no_grad():
    prediction = model([img_tensor])
    import matplotlib.pyplot as plt
    pred = prediction[0]
    boxes = pred['boxes']
    labels = pred['labels']
    scores = pred['scores']
    masks = pred['masks']

    score_threshold = 0.5

    plt.figure(figsize=(12, 12))
    plt.imshow(image)
    ax = plt.gca()

    for i in range(len(boxes)):
        if scores[i] >= score_threshold:
            label_id = labels[i].item()
            label_name = class_map.get(label_id, str(label_id))
            print(label_name)

    for i in range(len(boxes)):
        if scores[i] >= score_threshold:
            box = boxes[i].cpu().numpy()
            label_id = labels[i].item()
            label_name = class_map.get(label_id, str(label_id))
            ax.add_patch(plt.Rectangle((box[0], box[1]), box[2]-box[0], box[3]-box[1],
                                       fill=False, color='red', linewidth=2))
            ax.text(box[0], box[1], f'{label_name}:{scores[i]:.2f}', 
                    fontsize=12, color='yellow', bbox=dict(facecolor='red', alpha=0.5))
            mask = masks[i, 0].cpu().numpy()
            ax.imshow(mask, alpha=0.5, cmap='jet')

    plt.show()
print(prediction)
`}
                    </motion.pre>
                    
                    {/* Typing Cursor Effect */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-2 h-4 bg-primary-400"
                      animate={{
                        opacity: [1, 0, 1]
                      }}
                      transition={{
                        duration: 1
                        }}
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="code-block group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="flex items-center justify-between mb-4 p-3 bg-dark-700/50 rounded-t-lg"
                    whileHover={{ backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                  >
                    <motion.span 
                      className="text-primary-400 text-sm font-medium"
                      whileHover={{ color: "#60a5fa" }}
                    >
                      AI Model Training
                    </motion.span>
                    <span className="text-xs text-gray-400">Python • RCNN</span>
                    <motion.div
                      className="flex space-x-1"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="bg-dark-900/50 p-4 rounded-b-lg relative overflow-hidden"
                    whileHover={{
                      boxShadow: "inset 0 0 20px rgba(59, 130, 246, 0.1)"
                    }}
                  >
                    <motion.pre 
                      className="text-sm text-gray-300 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
{`def train_model(train_img_dir,train_ann_file,
    val_img_dir,val_ann_file,num_epochs=1,
    batch_size=2,model_output_path="maskrcnn_trained.pth"):

    train_dataset = CocoDataset(
        root=train_img_dir,annFile=train_ann_file,
        transforms=get_transform(train=True))
    val_dataset = CocoDataset(
        root=val_img_dir,annFile=val_ann_file,
        transforms=get_transform(train=False))
    train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True, collate_fn=lambda x: tuple(zip(*x)))
    val_loader = DataLoader(val_dataset, batch_size=1, shuffle=False, collate_fn=lambda x: tuple(zip(*x)))

    num_classes = len(train_dataset.category_id_to_name) + 1  # +1 for background
    model = get_model(num_classes)
    params = [p for p in model.parameters() if p.requires_grad]
    optimizer = torch.optim.SGD(params, lr=0.005, momentum=0.9, weight_decay=0.0005)
    lr_scheduler = torch.optim.lr_scheduler.StepLR(optimizer, step_size=3, gamma=0.1)

    for epoch in range(num_epochs):
        model.train()
        epoch_loss = 0.0
        for images, targets in tqdm(train_loader, desc=f"Training", unit="batch"):
            new_images, new_targets = [], []
            for img, tgt in zip(images, targets):
                new_images.append(img)
                new_targets.append(tgt)
            images = [img.to(device) for img in new_images]
            targets = [{k: v.to(device) for k, v in t.items()} for t in new_targets]
            loss_dict = model(images, targets)
            losses = sum(loss for loss in loss_dict.values())
            epoch_loss += losses.item()

            optimizer.zero_grad()
            losses.backward()
            optimizer.step()
        lr_scheduler.step()
    torch.save(model.state_dict(), model_output_path))
`}
                    </motion.pre>
                    
                    {/* Typing Cursor Effect */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-2 h-4 bg-primary-400"
                      animate={{
                        opacity: [1, 0, 1]
                      }}
                      transition={{
                        duration: 3,
                        delay: 0.5
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Floating Code Elements */}
              <motion.div
                className="absolute top-4 right-4 text-primary-400/20 text-6xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 8,
                  ease: "linear"
                }}
              >
                {`</>`}
              </motion.div>
            </div>
          </GlitchEffect>
        </ScaleIn>
      </div>
    </section>
  )
}

export default TechStackSection
