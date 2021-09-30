export default interface Tool {
  id: string;
  title: string;
  author: string;
  description: string;
  githubUrl: string;
  binaries: string[];
}
