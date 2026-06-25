export interface Project {
  title: string;
  year: string;
  category: string;
  course: string;
  description: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    title: "Streaming Data Pipeline (Kafka & Spark)",
    year: "2025",
    category: "Data Engineering",
    course: "Rekayasa Organisasi Sistem Big Data",
    description: "Arsitektur streaming Kafka (Producer, Consumer) → Cassandra (NoSQL) → Spark (DAG), dashboard Streamlit, alert Telegram.",
    tech: ["Kafka", "Spark", "Cassandra", "Streamlit", "Python"]
  },
  {
    title: "Pipeline Big Data & Analitik di Microsoft Azure",
    year: "2025",
    category: "Cloud",
    course: "Teknologi Cloud untuk Big Data",
    description: "Azure Function App + Cosmos DB + ADF + Azure ML + web visualization untuk prediksi cuaca 3 hari ke depan.",
    tech: ["Azure", "Cosmos DB", "ADF", "Azure ML", "Python"]
  },
  {
    title: "Aplikasi Manajemen Bengkel",
    year: "2025",
    category: "Web",
    course: "Desain Aplikasi Big Data",
    description: "Full-stack app dengan Expo React: Firebase Authentication, Supabase DB, fitur pemesanan & pemantauan servis.",
    tech: ["Expo", "React", "Firebase", "Supabase", "TypeScript"]
  },
  {
    title: "Sentimen Analisis YouTube",
    year: "2025",
    category: "ML/AI",
    course: "Machine Learning",
    description: "Klasifikasi sentimen (positif, negatif, netral) dengan auto scrape dari link YouTube, deploy via Azure App Service Plan.",
    tech: ["Python", "NLP", "Azure", "Scraping"]
  },
  {
    title: "Image Segmentation Deteksi Kanker Paru",
    year: "2025",
    category: "ML/AI",
    course: "Analisis Citra Biomedik",
    description: "Segmentasi citra medis LIDC-IDRI untuk mengetahui keparahan stadium kanker menggunakan deteksi tepi dan bentuk.",
    tech: ["Python", "OpenCV", "Deep Learning", "Medical Imaging"]
  },
  {
    title: "Data Warehouse & ETL dengan SSIS",
    year: "2025",
    category: "Data Engineering",
    course: "Manajemen & Infrastruktur Data Enterprise",
    description: "Skema dimensional (fact/dimension tables), ETL via SSIS, integrasi Power BI untuk business intelligence.",
    tech: ["SSIS", "SQL Server", "Power BI", "ETL"]
  },
  {
    title: "Deteksi Anomali Serangan Jaringan",
    year: "2025",
    category: "ML/AI",
    course: "Keamanan Data",
    description: "Model ML untuk deteksi anomali pada data jaringan, analisis pola serangan siber.",
    tech: ["Python", "Scikit-learn", "Network Security", "ML"]
  },
  {
    title: "Segmentasi Tumor Otak — UNet + Transformer",
    year: "2024",
    category: "ML/AI",
    course: "Artificial Intelligence",
    description: "Segmentasi tumor otak menggunakan deep learning arsitektur hybrid UNet + Transformer.",
    tech: ["PyTorch", "UNet", "Transformer", "Deep Learning"]
  },
  {
    title: "ETL & Integrasi Data IMDb",
    year: "2024",
    category: "Data Engineering",
    course: "Sistem Manajemen Basis Data",
    description: "ETL pipeline SSIS, data cleaning, query SQL kompleks, integrasi dengan web application.",
    tech: ["SSIS", "SQL Server", "ETL", "Web Integration"]
  }
];

export const categories = ["All", "Data Engineering", "Cloud", "ML/AI", "Web"];
