export interface Certification {
  title: string;
  issuer: string;
  status: 'Completed';
  blurb: string;
  tags: string[];
  link: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    title: 'Data Engineering Professional Certificate',
    issuer: 'DeepLearning.AI & AWS',
    status: 'Completed',
    blurb:
      'A four-course program covering the full data engineering lifecycle — generating, ingesting, storing, transforming, and serving data — with hands-on labs building batch and streaming pipelines on AWS. Taught by Joe Reis, co-author of Fundamentals of Data Engineering.',
    tags: [
      'AWS Data Architecture',
      'Batch & Streaming Pipelines',
      'Infrastructure as Code (Terraform)',
      'Apache Airflow',
      'Data Lakes & Lakehouse',
      'Dimensional Modeling',
      'Apache Spark',
      'DataOps',
    ],
    link: 'https://www.coursera.org/professional-certificates/data-engineering',
    icon: '🎓',
  },
  {
    title: 'Version Control (Git & GitHub)',
    issuer: 'Meta',
    status: 'Completed',
    blurb:
      'Git and GitHub fundamentals for collaborative software development — local repositories, commits, branching and merging, conflict resolution, and team workflows using remote repositories and pull requests.',
    tags: [
      'Git',
      'GitHub',
      'Branching & Merging',
      'Conflict Resolution',
      'Collaborative Workflows',
    ],
    link: 'https://www.coursera.org/account/accomplishments/verify/W6IL50TLQHI8',
    icon: '🏅',
  },
];
