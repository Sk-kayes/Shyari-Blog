import { BlacklistedTokenSchema } from './blacklisted-token.schema';

describe('BlacklistedTokenSchema', () => {
  it('should be defined', () => {
    expect(new BlacklistedTokenSchema()).toBeDefined();
  });
});
