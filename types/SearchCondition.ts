export default interface SearchCondition {
  searchText: string;
  author?: string;
  updatedAt?: Date;
  startedAt?: Date;
  stars?: number;
  tags?: string[];
}
