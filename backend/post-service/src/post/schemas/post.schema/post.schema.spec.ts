import { PostSchema } from './post.schema';

describe('PostSchema', () => {
  it('should be defined', () => {
    expect(new PostSchema()).toBeDefined();
  });
});
