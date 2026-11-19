// All portfolio content lives here. Edit this file to update the site.
const G = 'https://github.com/Bushra-Abad';

export const profile = {
  name: 'Bushra Abad',
  title: 'Web Developer & AI Engineer',
  email: 'bushraabad2@gmail.com',
  github: G,
  linkedin: 'https://www.linkedin.com/in/bushra-abad',
  cv: '', // TODO: put your PDF in /public and set e.g. '/Bushra-Abad-CV.pdf'
  location: 'Gilgit-Baltistan, Pakistan',
  horizon: 'https://expertshorizon.com/',
};

export const stack = ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'LLMs', 'RAG', 'LangGraph', 'PyTorch', 'Computer vision', 'Docker'];

export const services = [
  { title: 'Full-stack products', text: 'Web applications designed and built from idea to launch.', points: ['React front ends', 'Node.js and Express APIs', 'JWT auth, MongoDB, real-time features'] },
  { title: 'AI systems', text: 'LLM and retrieval workflows that fit into real products.', points: ['RAG and LangChain pipelines', 'Multi-agent flows with LangGraph', 'Fine-tuning with QLoRA'] },
  { title: 'Vision and deep learning', text: 'Models that see, caption, and generate images.', points: ['PyTorch and TensorFlow', 'MediaPipe and face detection', 'GANs and Vision Transformers'] },
];

export const values = [
  ['Accuracy first', 'Quality ahead of speed, every time.'],
  ['Clear updates', 'You always know where things stand.'],
  ['No surprises', 'Clear scope and honest timelines.'],
  ['Built to last', 'Dependable code that is easy to maintain.'],
];

export type Project = { name: string; desc: string; problem: string; stack: string[]; points: string[]; repo?: string };

export const projects: Project[] = [
  { name: 'TechHire ATS', desc: 'Full-stack recruitment platform with candidate and HR/admin portals, role-based JWT auth, real-time status updates, an analytics dashboard, resume uploads, and automated interview emails.', problem: 'Hiring teams need one place to publish jobs, receive applications, and track candidates, while applicants need to see where they stand.', stack: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Socket.io', 'JWT', 'Cloudinary', 'Nodemailer', 'Recharts'], points: ['Separate career, candidate, and HR/admin portals', 'Real-time status updates with Socket.io', 'HR analytics dashboard, job CRUD with branch and seat allocation', 'Resume uploads and automated interview invitations'] },
  { name: 'NeuroHire', desc: 'AI hiring platform that screens and ranks candidates with multi-agent orchestration and adds computer-vision proctoring to assessments.', problem: 'Screening many candidates and keeping assessments honest takes a lot of manual review.', stack: ['Python', 'LangChain', 'LangGraph', 'MediaPipe'], points: ['AI-assisted screening and ranking', 'Multi-agent orchestration with LangGraph', 'MediaPipe proctoring for assessment integrity'] },
  { name: 'Document-to-Markdown', desc: 'Gradio app that turns document images into structured Markdown, powered by a Qwen2-VL-2B model fine-tuned with QLoRA.', problem: 'Turning scanned or photographed documents into clean text normally means manual retyping.', stack: ['Qwen2-VL', 'QLoRA', 'Gradio', 'Docker'], points: ['2B-parameter model fine-tuned with QLoRA (4-bit) on Kaggle T4 GPUs', 'Interactive Gradio interface', 'Docker deployment support'], repo: `${G}/Document-To-Markdown-VLM-QLoRa` },
  { name: 'NeuroSecure', desc: 'Chrome extension that detects unauthorized users through the webcam and locks the tab, with face embeddings encrypted on-device using AES-GCM.', problem: 'An open browser can expose private data to anyone nearby.', stack: ['JavaScript', 'MediaPipe', 'face-api.js', 'AES-GCM'], points: ['Webcam-based user detection', 'Automatic tab locking', 'On-device AES-GCM encrypted embeddings'] },
  { name: 'DiReCT', desc: 'RAG system for diagnostic reasoning over de-identified ICU clinical notes from MIMIC-IV-Ext.', problem: 'Clinical notes are long and unstructured, so supporting diagnosis starts with finding the right context.', stack: ['Python', 'RAG', 'NLP'], points: ['Retrieval over de-identified ICU notes', 'Context-grounded diagnostic reasoning support'], repo: `${G}/Building-a-Retrieval-Augmented-Generation-RAG-System-for-Diagnostic-Reasoning-in-Clinical-Note` },
  { name: 'Neural Storyteller', desc: 'Image captioning pipeline pairing a ResNet50 encoder with a Seq2Seq decoder.', problem: 'Describe what an image shows in natural language.', stack: ['PyTorch', 'ResNet50', 'Seq2Seq'], points: ['ResNet50 image encoder', 'Seq2Seq caption decoder'], repo: `${G}/Neural-Storyteller-Building-an-Image-Captioning-Model-` },
  { name: 'Masked Autoencoder', desc: 'Self-supervised model that reconstructs images from 75% masked patches.', problem: 'Learn useful visual representations without labeled data.', stack: ['PyTorch', 'Vision Transformers'], points: ['Vision Transformer architecture', '75% patch masking and reconstruction'], repo: `${G}/Self-Supervised-Image-Representation-Learning-using-Masked-Autoencoders-MAE-` },
  { name: 'GAN Mode Collapse', desc: 'Techniques that improve output diversity and training stability in GANs.', problem: 'GANs can collapse to a few repeated outputs and train unstably.', stack: ['PyTorch', 'GANs'], points: ['Mode collapse mitigation techniques', 'Improved training stability'], repo: `${G}/Tackling-Mode-Collapse-in-Generative-Adversarial-Networks-GANs-` },
  { name: 'Doodle-to-Real', desc: 'Pix2Pix conditional GAN that turns hand-drawn doodles into realistic, colorized images.', problem: 'Turn rough sketches into realistic images.', stack: ['PyTorch', 'Pix2Pix', 'Conditional GAN'], points: ['Pix2Pix conditional GAN', 'Sketch-to-image translation with colorization'], repo: `${G}/Doodle-to-Real-Image-Translation-and-Colorization-using-Pix2Pix` },
];
