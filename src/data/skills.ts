export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "code",
    skills: ["Python", "SQL", "R", "Java", "JavaScript", "TypeScript", "NoSQL"]
  },
  {
    name: "Data Engineering",
    icon: "database",
    skills: ["Apache Kafka", "Spark", "Hadoop", "Cassandra", "SSIS", "ETL/ELT Pipelines"]
  },
  {
    name: "Cloud & Databases",
    icon: "cloud",
    skills: ["Microsoft Azure", "AWS", "SQL Server", "MySQL", "PostgreSQL", "Cosmos DB"]
  },
  {
    name: "Analytics & Visualization",
    icon: "chart",
    skills: ["Machine Learning", "Deep Learning", "Power BI", "Streamlit"]
  }
];
