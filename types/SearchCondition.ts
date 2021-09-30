export default interface SearchCondition {
  searchWords: string[];
  author?: string;
  updatedAt?: Date;
  startedAt?: Date;
  stars?: number;
  tags?: string[];
}
