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
    link: 'https://www.coursera.org/account/accomplishments/specialization/9PDRIQU7DF37',
    icon: '🎓',
  },
  {
    title: 'Front-End Developer Professional Certificate',
    issuer: 'Meta',
    status: 'Completed',
    blurb:
      'A multi-course program covering JavaScript, React, HTML/CSS and UX principles, plus version control with Git and GitHub — local repositories, branching and merging, conflict resolution and pull-request workflows.',
    tags: [
      'JavaScript',
      'React',
      'HTML/CSS',
      'UX Principles',
      'Git & GitHub',
    ],
    link: 'https://www.coursera.org/account/accomplishments/specialization/OXYUUK255UIO',
    icon: '🏅',
  },
];
